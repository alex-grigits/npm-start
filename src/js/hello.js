export default function hideP() {
  $(document).ready(function(){
    $("p").click(function(){
          $(this).hide();
      });
  });
}