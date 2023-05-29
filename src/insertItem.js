"use strict"

const {v4} = require("uuid")
const AWS = require("aws-sdk")

const insertItem = async (event) => {


    const {item} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4()

    const dynamoDB = new.dynamoDB.DocumentClient();

    const new = {
        id,
        item,
        createdAt,
        itemStatus: false
    }

    awwait dynamoDB.put(
        {
            TableName:"ItemTableNew",
            Item: newItem
        }
    )

    return {
        statusCode: 200,
        body: JSON.stringify(newItem);
    };

}

module.exports = {
    handler:insertItem
}