const path = require("path");

const platos = [{
    title: "Carpaccio Fresco",
    description: "Entrada Carpaccio de salmón con cítricos U$S 65.50",
}, {
    title: "Risotto de Berenjena",
    description: "Risotto de berenjena y queso de cabra U$S 47.00",
}, {
    title: "Mousse de Arroz",
    description: "Mousse de arroz con leche y aroma de azahar U$S 27.50",
}, {
    title: "Espárragos Blancos",
    description: "Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50"
}]

const controller = {
    index: (req, res) => {
        res.render("index", {platos});
    },
    menuDetail: (req, res) => {
        res.render("detalleMenu")
    }
}

module.exports = controller;