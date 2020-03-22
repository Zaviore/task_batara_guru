//const container_questions = document.getElementById("questions");

const getDataByCategory = category => {
  // console.log("get data");
  $("#questions").html("Loading...");
  // fetch("/data/questions.json?category=serba-serbi")
  fetch("/data/questions.json")
    .then(response => {
      $("#questions").html("");
      return response.json();
    })
    .then(data => {
      console.log(data);
      data.map(item => {
        if (category === item.category)
          $("#questions").append(`
               <div style="display: flex;margin-top: 10px;">
                   <div>
                     <a href="/page3.html">
                       <div style="display: flex; font-size: 12px;color:#636E97">
                       <div style="flex-grow: 1;">
                           Pertanyaan yang diajukan . ${item.category}
                       </div>
                       <div>${item.createdAt}</div>
                       </div>
                       <hr />
                       <div>
                       <h5 style="font-size: 19px;" class="primary-color">
                           ${item.title}
                       </h5>
                       <div style="font-size: 10px;color: gray;">
                           <img
                           style="margin-right: 5px;max-width: 25px;"
                           src="${item.user.photo}"
                           />
                           ${item.user.name},  ${item.user.desc}
                       </div>
                       <p style="font-size: 14px;margin: 10px 0 30px 0;">
                       ${item.desc}
                       </p>
                       </div>
                       <div
                       style="background-color: white; display: flex; flex-direction: row-reverse;margin:-15px;padding: 10px 0;border-top-left-radius: 40px;"
                       >
                       <button
                           type="button"
                           class="btn btn-round"
                           style=" background-color: #636e97;color: white;font-size: 14px;"
                       >
                           Tambah Mosi
                           <i class="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
                       </button>
   
                       <button
                           type="button"
                           class="btn btn-round "
                           style="color: gray;font-size: 14px;"
                       >
                           Komentar
                           <span
                           style="background-color:gainsboro; border-radius: 2.5px;padding: 2.5px;color: gray;"
                           >4+</span
                           >
                       </button>
                       <button
                           type="button"
                           class="btn btn-round"
                           style="color: gray;font-size: 14px;"
                       >
                           Berbagi
                           <i class="fa fa-share-alt" aria-hidden="true"></i>
                       </button>
                       </div>
                     </a>
                   </div>
               </div>
           `);
      });
    });
};

const getAllData = category => {
  // console.log("get data");
  $("#questions").html("Loading...");
  fetch("/data/questions.json")
    .then(response => {
      $("#questions").html("");
      return response.json();
    })
    .then(data => {
      console.log(data);
      data.map(item => {
        $("#questions").append(`
                 <div style="display: flex;margin-top: 10px;">
                     <div>
                       <a href="/page3.html">
                         <div style="display: flex; font-size: 12px;color:#636E97">
                         <div style="flex-grow: 1;">
                             Pertanyaan yang diajukan . ${item.category}
                         </div>
                         <div>${item.createdAt}</div>
                         </div>
                         <hr />
                         <div>
                         <h5 style="font-size: 19px;" class="primary-color">
                             ${item.title}
                         </h5>
                         <div style="font-size: 10px;color: gray;">
                             <img
                             style="margin-right: 5px;max-width: 25px;"
                             src="${item.user.photo}"
                             />
                             ${item.user.name},  ${item.user.desc}
                         </div>
                         <p style="font-size: 14px;margin: 10px 0 30px 0;">
                         ${item.desc}
                         </p>
                         </div>
                         <div
                         style="background-color: white; display: flex; flex-direction: row-reverse;margin:-15px;padding: 10px 0;border-top-left-radius: 40px;"
                         >
                         <button
                             type="button"
                             class="btn btn-round"
                             style=" background-color: #636e97;color: white;font-size: 14px;"
                         >
                             Tambah Mosi
                             <i class="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
                         </button>
     
                         <button
                             type="button"
                             class="btn btn-round "
                             style="color: gray;font-size: 14px;"
                         >
                             Komentar
                             <span
                             style="background-color:gainsboro; border-radius: 2.5px;padding: 2.5px;color: gray;"
                             >4+</span
                             >
                         </button>
                         <button
                             type="button"
                             class="btn btn-round"
                             style="color: gray;font-size: 14px;"
                         >
                             Berbagi
                             <i class="fa fa-share-alt" aria-hidden="true"></i>
                         </button>
                         </div>
                       </a>
                     </div>
                 </div>
             `);
      });
    });
};
