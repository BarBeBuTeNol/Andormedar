import { doQuery } from "../../../common/database/mysql.db.js";
import { UserModels, TableName} from '../model/movie.schema.js';
import { Category, Table_category } from "../model/category.shema.js";

const UserService = {
    createUser: (payload) => {
        return doQuery(`INSERT INTO ${TableName} SET ?`, payload);
    },
    
    getUserAll: (columns = Object.keys(UserModels)) => {
        // Ensure category name is included in the selected columns
        const selectedColumns = [...columns, 'c.id_n_category'];
        const options = [selectedColumns, TableName, Table_category];
    
        return doQuery(`
            SELECT ??, c.id_n_category AS category_name 
            FROM ?? AS m
            LEFT JOIN ?? AS c ON m.category = c.id_category
        `, options);
    },
    
    
    getUserById: async (id) => {
        const sql = `
            SELECT 
                m.*, 
                c.name AS id_n_category 
            FROM 
                ${TableName} m 
            INNER JOIN 
                ${Table_category} c ON m.category = c.id_category 
            WHERE 
                m.id = ?`;
        
        const options = [id];
        return await doQuery(sql, options);
    },
    

    updateOneUserById: (id, payload) => {
        let setClause = '';
        const values = [];

        for (const [key, value] of Object.entries(payload)) {
            setClause += `${key} = ?, `;
            values.push(value);
        }

        setClause = setClause.slice(0, -2);
        values.push(id);
        const sql = `UPDATE ${TableName} SET ${setClause} WHERE id = ?`;

        return doQuery(sql, values);    
    },

    deleteUserById: async function (id = {}) {
        try {
            // ลบข้อมูลตาม ID ที่กำหนด
            const sqlDelete = `DELETE FROM ${TableName} WHERE id = ?`;
            await doQuery(sqlDelete, [id]);

            // ปรับ ID ของข้อมูลที่เหลือให้เรียงลำดับใหม่
            await this.reorderIds(); // เรียกใช้ฟังก์ชันเพื่อปรับ ID
            
            return { affectedRows: 1 };
        } catch (error) {
            console.error(`Error deleting user: ${error.message}`);
            throw error;
        }
    },

    reorderIds: async function () {
        try {
            // 1. เริ่มต้น @count
            await doQuery(`SET @count = 0;`);
            
            // 2. อัปเดต ID ของผู้ใช้
            await doQuery(`UPDATE ${TableName} SET id = (@count := @count + 1);`);
            
            // 3. ปรับ AUTO_INCREMENT
            const maxIdResult = await doQuery(`SELECT MAX(id) AS maxId FROM ${TableName}`);
            const maxId = maxIdResult[0].maxId || 0; // ถ้าไม่มี ID ให้เริ่มที่ 0
            
            await doQuery(`ALTER TABLE ${TableName} AUTO_INCREMENT = ?`, [maxId + 1]);
            
        } catch (error) {
            console.error("Error reordering IDs:", error);
            throw error;
        }
    },

    deleteMovieById: async function (id) {
        try {
            // 1. ลบหนัง
            await doQuery(`DELETE FROM ${TableName} WHERE id = ?`, [id]);

            // 2. ปรับ ID และ AUTO_INCREMENT
            await this.reorderIds(); // เรียกใช้ฟังก์ชันเพื่อปรับ ID
            
        } catch (error) {
            console.error("Error deleting movie:", error);
            throw error;
        }
    }

    
};

export default UserService;
