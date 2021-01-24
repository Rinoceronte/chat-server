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

// let messages = [];
// let id = 0;

// module.exports = {
//   create: (req, res) => {
//     const { text, time } = req.body;
//     messages.push({ id, text, time });
//     id++;
//     res.status(200).send(messages);
//   },

//   read: (req, res) => {
//     res.status(200).send(messages);
//   },

//   update: (req, res) => {
//     const { text } = req.body;
//     const updateID = req.params.id;
//     const messageIndex = messages.findIndex(message => message.id == updateID);
//     let message = messages[messageIndex];

//     messages[messageIndex] = {
//       id: message.id,
//       text: text || message.text,
//       time: message.time
//     };

//     res.status(200).send(messages);
//   },

//   delete: (req, res) => {
//     const deleteID = req.params.id;
//     messageIndex = messages.findIndex(message => message.id == deleteID);
//     messages.splice(messageIndex, 1);
//     res.status(200).send(messages);
//   }
// };