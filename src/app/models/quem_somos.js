const { Schema, model } = require("mongoose")

const QuemSomosSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    descricao: {
        type: String,
        required: true,
    },
    imagem: {
        type: Array,
        required: false,
    },
    ordenacao: {
        type: String,
        required: false,
    },
    status: {
        type: Boolean,
        trim: true,
        maxlength: 1,
        default: 1
    }
},
    {
        versionKey: false,
        timestamps: false
    }
)
module.exports = model('quemSomosSchema', QuemSomosSchema)