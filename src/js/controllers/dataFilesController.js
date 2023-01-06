import db from '../db_config/db_config.js';

export const createDataFile = (req, res) => {   
    const { name, description, file_csv, provider, confirmed } = req.body;
    const query = 'INSERT INTO data_file (name, description, file_csv, provider, date_creation, confirmed) VALUES (?, ?, ?, ?, ?, ?)';
    const date_creation = new Date();

    // Check for nesesery fields

    if (!(name && description && file_csv && provider)) {
        const message = 'Name, description, file_csv and provider are nesesery fields';
        console.log(message);
        return res
            .status(404)
            .json({message});
    }

    // Check for dublicated names

    db.query('SELECT COUNT(*) AS namesCount FROM data_file WHERE name=?', [name], (err, result) => {
        const count = result[0].namesCount;
        if(count !== 0) {
            const message = `Data file with name:[${name}] is already existing`;
            console.log(message);
            return res
                .status(404)
                .json({message});
        }

        // Create data file

        db.query(query, [name, description, file_csv, provider, date_creation, confirmed], (err, result) => {
            if(!err){
                const message = `Data file with name:[${name}] was added`;
                console.log(message);
                return res
                    .status(200)
                    .json({message});
            } else {
                return res
                    .status(500)
                    .json(err);
            }
        });
    });
    
};

export const getDataFiles = (req, res) => {

    // Get data files

    const query = 'SELECT *FROM data_file';
    db.query(query, (err,result) => {
        if(!err){
            const message = 'Data files were succsesfuly received';
            console.log(message);
            return res
                .status(200)
                .json({message, result});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};

export const getDataFile = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT *FROM data_file WHERE id=?';

    // Get data file

    db.query(query, [id], (err,result) => {
        if (result.length == 0) {
            const message = `No data file with id:[${id}]`;
            console.log(message);
            return res
                .status(404)
                .json({message});
        }
        if(!err){
            const message = `Data file with id:[${id}] was recieved`;
            console.log(message);
            return res
                .status(200)
                .json({message, result});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};

export const deleteDataFile = (req, res) => { 
    const id = req.params.id;
    const query = 'DELETE FROM data_file WHERE id=?';

    // Deleate data file

    db.query(query, [id], (err, result) => {
        if(result.affectedRows == 0) {
            const message = `No data_file with id:[${id}]`;
            console.log(message);
            return res
                .status(404)
                .json({message});
        }
        if(!err){
            const message = `Data file with id:[${id}] was succsessfuly deleted`;
            console.log(message);
            return res
                .status(200)
                .json({message});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};

export const updateDataFile =  (req,res) => {
    const id = req.params.id; 
    let { name, description, file_csv, provider, confirmed } = req.body;
    const query = 'UPDATE data_file SET name=?, description=?, file_csv=?, provider=?, confirmed=? where id=?';

    // Update data file

    db.query(query, [name, description, file_csv, provider, confirmed, id],(err, result) => {
        if(result.affectedRows == 0) {
            const message = `No data_file with id:[${id}]`;
            return res
                .status(404)
                .json({message});
        }
        if (!err) {
            const message = `Data file with id:[${id}] succsessfuly updated`;
            console.log(message);
            return res
                .status(200)
                .json({message});
        } else {
            return res
                .status(500)
                .json(err);
        }
    });
};