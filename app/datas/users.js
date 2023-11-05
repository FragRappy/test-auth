import AdminUser from "../models/user/AdminUser.js";
import MemberUser from "../models/user/MemberUser.js";
import VipUser from "../models/user/VipUser.js";

export default [
    new AdminUser('Hubert', 'BAUDIN', 'admin@admin.fr', 'Test1234!'),
    new MemberUser('Gérard', 'MUGEOT', 'gege.mumu@gmail.com', 'Test1234!'),
    new VipUser('Louis', 'XIV', 'camel.ouali@roisoleil.fr', 'Test1234!'),
];