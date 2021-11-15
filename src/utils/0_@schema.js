// https://github.com/john-doherty/jsdoc-to-json-schema#input-singleton

/**
 * @schema.name Person
 * @schema.description This is an example Person object marked up with JSON schema tags to allow schema generation
 */
var Person = {

    /**
     * @schema.title Name
     * @schema.description Please enter your full name
     * @schema.type string
     * @schema.maxLength 30
     * @schema.minLength 1
     * @schema.required true
     */
    name: '',

    /**
     * @schema.title Job Title
     * @schema.type string
     */
    jobTitle: '',

    /**
     * @schema.title Telephone Number
     * @schema.description Please enter telephone number including country code
     * @schema.type string
     * @schema.required true
     */
    telephone: '',

    /**
     * @schema.type string
     * @schema.required true
     */
    dateOfBirth: ''
};

/*
Output
{
  "name": "Person",
  "description": "This is an example Person object marked up with JSON schema tags to allow schema generation",
  "properties": {
    "name": {
      "title": "Name",
      "description": "Please enter your full name",
      "type": "string",
      "maxLength": 30,
      "minLength": 1,
      "required": true
    },
    "jobTitle": {
      "title": "Job Title",
      "type": "string"
    },
    "telephone": {
      "title": "Telephone Number",
      "description": "Please enter telephone number including country code",
      "type": "string",
      "required": true
    },
    "dateOfBirth": {
      "type": "string",
      "required": true
    },
    "address": {
      "type": "object"
    }
  }
}
*/

// ───────────────────────


/**
 * @schema.name Product
 * @schema.description An example product marked up with json schema comments
 */
function Product(){

}

/**
 * @schema.type array
 * @schema.minItems 3
 * @schema.maxItems 6
 * @schema.required true
 */
Product.prototype.types = function(){

}