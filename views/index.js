// const { response } = require("express");
// const users = require('./order_summary.json');
let cust_name = $('#cust_name');
let cust_id = $('#cust_id');
let cust_add = $('#cust_add');
let cust_phone = $('#cust_phone');
let cust_about = $('#cust_about');
let cust_likes = $('#cust_likes');
let cust_dislikes = $('#cust_dislikes');

$(function() {
    fetch('http://localhost:3000/backend/customerData')
        .then((response)=> {
            return response.json();
        })
        .then((data)=>{
            var users = data;
            // console.log(data);
            personal_data = data.data;
            console.log(personal_data.name);
            document.getElementById('cust_name').innerHTML = personal_data.name;
            document.getElementById('cust_add').innerHTML = personal_data.address;
            document.getElementById('cust_id').innerHTML = personal_data.id;
            document.getElementById('cust_phone').innerHTML = personal_data.phone;
            document.getElementById('cust_about').innerHTML = personal_data.about;
            document.getElementById('cust_likes').innerHTML = personal_data.likes;
            document.getElementById('cust_dislikes').innerHTML = personal_data.dislikes;
        })
    

})