const roles = ['admin', 'manager', 'supervisor', 'editor', 'viewer', 'owner', ''];
const userRoles = ['user', 'editor'];
const requiredRoles = ['admin', 'editor'];

const hasRequiredRole = userRoles.some(role => requiredRoles.includes(role));

console.log(hasRequiredRole); 
