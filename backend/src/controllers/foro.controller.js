import Foro from '../models/foro.model.js';

export const getForo = async (req, res) => {
    try {
        const foro = await Foro.find({
            user: req.user.id
        }).populate('user');
        res.json(foro);
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
};
export const createForo = async (req, res) => {
    try {
        const { title, description, date } = req.body;

    const newForo = new Foro({
        title,
        description,
        date,
        user: req.user.id
    });
    await newForo.save();
    res.json(newForo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getPost = async (req, res) => {
    try {
        const foro = await Foro.findById(req.params.id);
    if (!foro) return res.status(404).json({message: 'Foro no encontrado'});
    return res.json(foro);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const updatePost = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const foroUpdate = await Foro.findByIdAndUpdate({ _id: req.params.id },
            { title, description, date },
            { new: true });
        return res.json(foroUpdate);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const deleteForo = async (req, res) => {
    try {
        const deletedForo = await Foro.findByIdAndDelete(req.params.id);
    if (!deletedForo) return res.status(404).json({message: 'Foro no encontrado'});
    return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllPost = async (req, res) => {
    try {
        const postCollection = await Foro.find().populate('user');
        res.json(postCollection);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};