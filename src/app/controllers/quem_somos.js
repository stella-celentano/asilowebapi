const mongoose = require('mongoose')
const QuemSomosSchema = require('./../models/quem_somos')

class QuemSomos {

    getWithParams(req, res) {

        let limit = parseInt(req.query.limit)
        let query = {}
        let page = req.query.page
        let skip = limit * (page - 1)
        let { columnSort, valueSort } = req.query

        QuemSomosSchema
            .find(query)
            .sort([[columnSort, valueSort]])
            .skip(skip)
            .limit(limit)
            .exec((err, data) => {
                if (err) {
                    res.status(500).json({ message: 'Houve um erro ao processar sua requisição', err: err })
                } else {
                    QuemSomosSchema
                        .find(query)
                        .exec((err) => {
                            if (err) {
                                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', err: err })
                            } else {
                                res.status(200).json({
                                    message: 'Dados recuperados com sucesso',
                                    data: data,
                                    page: page,
                                    limit: limit
                                })
                            }
                        })
                }
            })
    }

    create(req, res) {
        QuemSomosSchema.create(req.body, (err, quemSomos) => {
            if (err) {
                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', error: err })
            } else {
                res.status(201).json({ message: 'Quem Somos inserido com sucesso', data: quemSomos })
            }
        })
    }

    update(req, res) {
        QuemSomosSchema.updateOne({ _id: req.params.id }, { $set: req.body }, (err, quemSomos) => {
            if (err) {
                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', error: err })
            } else {
                res.status(200).json({ message: 'Quem Somos atualizado com sucesso', data: quemSomos })
            }
        })
    }

    delete(req, res) {
        QuemSomosSchema.deleteOne({ _id: req.params.id }, (err, quemSomos) => {
            if (err) {
                res.status(500).json({ message: 'Houve um erro ao processar sua requisição', error: err })
            } else {
                res.status(200).json({ message: 'Quem Somos apagado com sucesso', data: quemSomos })
            }
        })
    }
}

module.exports = new QuemSomos()