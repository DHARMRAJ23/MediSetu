import jwt from 'jsonwebtoken'

// Admin Authenthication middelwares

const Authadmin = async (req, res, next) => {
    try {
        const { admintoken } = req.headers

        if (!admintoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        const tokendecode = jwt.verify(admintoken, process.env.JWT_SCREKET);
        if (tokendecode.role !== 'admin' || tokendecode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }
        next();
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
export default Authadmin