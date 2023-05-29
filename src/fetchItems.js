"use strict";

const AWS = require("aws-sdk")

const fetchItems = async (event) => {

    const dynamoDB = new.dynamoDB.DocumentClient();

    let items;

    try{
        const results = await dynamoDB.scan({
            TableName: "ItemTableNew"
        }).promise();

        items = results.items
    }catch (error){

      console.log(error) 

    }
    
    return {
        statusCode: 200,
        body: JSON.stringify(newItem);
    };

    module.exports = {
        handler: fetchItems,
    }
}