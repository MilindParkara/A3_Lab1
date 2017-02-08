// Java Script Document

//page scroll javascript 
(function() {
    "use strict"
    console.log("javascript loaded");
    
    var car1 = document.querySelector("#newCar1");
     var car2 = document.querySelector("#newCar2");
     var car3 = document.querySelector("#newCar3");
  
  console.log("var loaded");
    
    function text1() {
  console.log("call function");
      document.getElementById("intro1").innerHTML= "Mini 5 Door";
    console.log("id1 working");
    document.getElementById("intro2").innerHTML=
  "22,240";
     document.getElementById("intro3").innerHTML=
  "The Mini Countryman was announced in January 2010, and formally launched at the 2010 Geneva Motor Show. It is the first Mini crossover SUV, and the first five-door model to be launched in the BMW-era. It is offered with a choice of two- or four-wheel drive (known as ALL4), and with 1.6 L petrol or diesel and 2.0 L diesel four-cylinder engines in various states of tune.[46] Sales started in September 2010 as a 2011 model-year vehicle.  The Countryman has a longer wheelbase, more interior room, and higher ground clearance than the Clubman. It uses the same engines as the Hatch/Clubman range, but with an optional all-wheel-drive powertrain (dubbed ) to allow minimal off-road and rugged terrain driving.[47] A six-speed manual transmission is standard on all models, with automatic transmission available on all petrol and diesel models except the 90 bhp One D."
    };
    
    
    
     function text2() {
   console.log("call function");
      document.getElementById("intro1").innerHTML= "Mini 3 Door";
    console.log("id1 working");
    document.getElementById("intro2").innerHTML=
  "20,990";
     document.getElementById("intro3").innerHTML=
  "The Mini Hatch, stylized as MINI hatch or MINI Hardtop in the US, is a three-door hatchback first introduced in late 2000, with a second generation launched in 2006 and a third generation model launched in 2014. A convertible version was introduced in 2004, with the second generation following in 2008.  The Mini is produced in Cowley, Oxfordshire, UK, at Plant Oxford, with additional capacity introduced in the Netherlands for the third generation model due by the summer of 2014. The Mini Hatch was the first model launched by BMW under the Mini marque after the original Mini was discontinued in 2000. The new model built by BMW is technically unrelated to the former."
    };
    
     function text3() {
  console.log("call function");
      document.getElementById("intro1").innerHTML= "Mini Convertible";
    console.log("id1 working");
    document.getElementById("intro2").innerHTML=
  "27,990";
     document.getElementById("intro3").innerHTML=
  "capacity. This unit features double overhead camshaft valve gear, 4 cylinder layout, and 4 valves per cylinder. It produces 181 bhp (184 PS/135 kW) of power at 5500 rpm, and maximum torque of 260 N·m (192 lb·ft/26.5 kgm) at 1600 rpm. The engine delivers its power through to the wheels via a 6 speed manual gearbox."
    };
 
        car1.addEventListener("click",text1,false);
    car2.addEventListener("click",text2,false);
    car3.addEventListener("click",text3,false);
     // console.log("listener working");
   
}
)();