let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        messages.push({id: id, text: req.body.text, time: req.body.time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let i = messages.findIndex(m => m.id === Number(req.params.id));
        let message = messages[i];
        messages[i] = {
            id: message.id,
            text: req.body.text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        messages.splice(messages.findIndex(m => m.id === Number(req.params.id), 1));
        res.status(200).send(messages);
    }
};
