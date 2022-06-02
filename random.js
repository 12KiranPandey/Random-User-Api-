var title,first,last;
var phoneNo,password,email,picture,Gender,Location;
async function getData()
{
    var data=await fetch('https://randomuser.me/api');
    var res=await data.json();
    console.log(res);
    var resp=res.results[0];
    title=resp.name.title;
    first=resp.name.first;
    last=resp.name.last;
    picture=resp.picture.large;
    password=resp.login.password;
    email=resp.email;
    phoneNo=resp.phone;
    Location=resp.location.city;
    Gender=resp.gender;
    console.log(first);

    document.querySelector("#name").innerHTML=title+" "+first+" "+last;
    document.querySelector("#img").src=picture;

}
getData();


function getInfo(param)
{
    if(param=='name')
    {   document.getElementById("line").innerText="Hi My Name is";
        document.querySelector("#name").innerHTML=title+" "+first+" "+last;
    }
    else if(param=='email')
    {  
         document.getElementById("line").innerText=" My Email Address is";
        document.querySelector("#name").innerHTML=email;
    }
    else if(param=='pass')
    {
        document.getElementById("line").innerText="And My password  is";
        document.querySelector("#name").innerHTML=password;
    }
    else if(param=='phone')
    {
        document.getElementById("line").innerText=" My contact number is ";
        document.querySelector("#name").innerHTML=phoneNo;
    }
    else if(param=='gender'){
        document.getElementById("line").innerText=" My gender is";
        document.querySelector("#name").innerHTML=Gender;
    }
    else if(param=='location'){
        document.getElementById("line").innerText="I live in";
        document.querySelector("#name").innerHTML=Location;
    }
    else
    {
        document.getElementById("line").innerText="Hi My Name is";
        document.querySelector("#name").innerHTML=title+" "+first+" "+last;
    }

}























