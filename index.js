const oracledb = require('oracledb');
(async function () {
  
    const connection = await oracledb.getConnection({
      user: 'system',
      password: 'aditya',
      connectString: 'localhost/xe'
    });

    // const sql = `
    //   INSERT INTO user905 (id,name, password, email, country)     
    //   VALUES (1006,'niraj', 'abc23', 'joker@gmail.com', 'india')
    // `;

  //   const sql = `
  //   UPDATE user905
  //   SET country = 'JAPAN'
  //   WHERE id = 1005
  // `;

    const data = await connection.execute(sql);
    console.log(data.rowsAffected + " row(s) inserted");
    await connection.commit();  //if not commit ,then forget data what u added hahahaha
    const result = await connection.execute('SELECT * FROM user905');
    console.log(result.rows);
}
)()
