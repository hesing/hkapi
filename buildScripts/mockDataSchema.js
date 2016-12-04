export const schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName",
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email",
                    },
                    "address": {
                        "type": "object",
                        "properties": {
                            "state": {
                                "type": "string",
                                "faker": "address.state"
                            },
                            "city": {
                                "type": "string",
                                "faker": "address.city"
                            },
                            "pincode": {
                                "type": "string",
                                "faker": "address.zipCode"
                            }
                        },
                        required: ['state', 'city', 'pincode']
                    }
                },
                required: ['id', 'firstName', 'lastName', 'email']
            }
        },
        "posts": {
            "type": "array",
            "minItems": 0,
            "maxItems": 20,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "body": {
                        "type": "string",
                        "faker": "name.lastName",
                    },
                    "createdOn": {
                        "type": "string",
                        "faker": "date.future"
                        // "chance": {
                        //   "date": {
                        //     "string": true
                        //   }      
                        // }
                    }
                },
                required: ['id', 'title', 'createdOn']
            }
        },
    },
    required: ['users', 'posts']
};
