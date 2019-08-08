exports.renderToView = async (req, res, view, data) => {
    let originalUrl = req.originalUrl;
    if (!data)
        return res.render(view, { originalUrl });
    return res.render(view, { originalUrl, data });
}