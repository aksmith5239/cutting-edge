const Customer = require('./Customer');
const Appointment = require('./Appointment');
const Stylist = require('./Stylist');
const Service = require('./Service');

//associations
// Stylist.hasMany(Service, {
//     foreignKey: 'stylist_id'
// });

// Service.belongsTo(Customer, {
//     foreignKey: 'customer_id'
// });

// Stylist.hasMany(Appointment, {
//     foreignKey: 'stylist_id'
// });
// Service.hasOne(Customer, {
//     foreignKey: 'customer_id'
// });

Customer.hasOne(Service, {
    foreignKey: 'customer_id'
});

// Service.belongsTo(Customer, {
//     foreignKey: 'customer_id'
// });

Service.hasMany(Appointment,  {
    foreignKey: 'service_id'
});

Appointment.belongsTo(Service, {
    foreignKey: 'service_id'
});
// Appointment.hasOne(Service, {
//     foreignKey: 'service_id'
// });

Stylist.hasMany(Appointment, {
    foreignKey: 'stylist_id'
});

// Customer.hasMany(Appointment, {
//     foreignKey: 'customer_id'
//   });

Appointment.belongsTo(Stylist, {
    foreignKey: 'stylist_id',
  });

module.exports = {
    Customer,
    Appointment,
    Stylist,
    Service
};