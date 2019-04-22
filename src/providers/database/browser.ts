export const browserDBInstance  = (db) => {



    return {
  
      executeSql: (sql, param) => {
  
        return new Promise((resolve, reject) => {
  
          db.transaction((tx) => {
  
            tx.executeSql(sql, param, (tx, rs) => {
  
              resolve(rs)
  
            });
  
          }, (error) => {
            console.log('Transaction ERROR: ' + error.message);
          });
  
        })
  
      },
  
      sqlBatch: (arr) => {
  
        return new Promise((r, rr) => {
  
          let batch = [];
  
          db.transaction((tx) => {
  
            for (let i = 0; i < arr.length; i++) {
  
              batch.push(new Promise((resolve, reject) => {
  
                tx.executeSql(arr[i], [], () => { resolve(true) })
  
              }))
  
              Promise.all(batch).then(() => r(true));
  
            }
  
          });
  
        })
  
      }
  
    }
  
  }