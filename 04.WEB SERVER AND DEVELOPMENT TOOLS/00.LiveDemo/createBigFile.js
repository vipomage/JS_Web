const fs = require("fs");
const file = fs.createWriteStream("./file.txt");

for (let i = 0; i < 1e4; i++) {
  file.write(
    "Lorem ipsum dolor sit amet, morbi per, amet eros lobortis, eros magna, id rhoncus eget. Volutpat sollicitudin varius aliquam magna amet, vel eget nec, et venenatis maecenas ridiculus. Massa aliquam ut enim lobortis velit, non fermentum orci, quis pellentesque sem nibh lacinia id nulla, ultricies odio neque euismod metus. Amet ac magna, arcu ligula cras aenean ac massa ut, ante torquent venenatis dolor quam duis integer, vel amet metus ultrices wisi pharetra mi, amet erat massa id augue donec mattis. Pulvinar dapibus in imperdiet ultrices ligula, ut nunc lorem porta scelerisque, proin in velit, pellentesque justo morbi urna orci pellentesque malesuada, est imperdiet nunc iaculis. Nisl cras iaculis vel magnis, dui sociosqu enim vel vel. Ligula libero risus metus dolor blandit consectetuer.\n" +
      "\n" +
      "Est minim, odio quam, integer congue neque mollis ut. Lobortis ullamcorper hymenaeos vestibulum similique, pede sed etiam, sed lectus, eget eu vel cras mauris facilisis, lectus elit. Fusce amet, ante gravida sapien. Hac sit elit, nec faucibus pellentesque sagittis mauris. Enim vestibulum rutrum auctor nonummy, massa torquent maecenas, nec donec lorem integer egestas amet, aliquet leo. Fermentum magna id ornare et laboriosam, sed maecenas mi nunc tempus optio, pharetra quisque risus id sit urna, ut mollis nunc aut. Nam etiam ante a a aliquam mattis. Amet lorem, molestie sit dui duis suspendisse, est litora ante hymenaeos, auctor voluptates in arcu egestas ac, maecenas eu. Pede massa. Dolor id turpis neque tortor, consectetuer et dolor. In neque neque vestibulum dolor.\n" +
      "\n"
     );
  
}

file.end();
