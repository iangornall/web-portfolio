//run search with enter key
$('#search').keypress(function(event){
  if(event.which === 13){
    searchWiki();
  }
})
//run search with search button click
$('#searchButton').click(searchWiki);
function searchWiki(){
  var searchPhrase = $('#search').val();
  var url = '//en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + searchPhrase;
  $.ajax({
    url: url,
    type: 'GET',
    data: 'queryData',
    dataType: 'json',
    headers: {'Api-User-Agent': 'WikipediaViewer/1.0 (http://iangornall.com/wiki-viewer; ian.gornall@gmail.com)'}
  })
  .fail(function(){
    console.log('An error occurred');
  })
  .done(function(response){
    //clear search box and prior search results
    $('#search').val('');
    $('#searchResults').html('');
    var title;
    var url;
    var description;
      for(var j = 0; j < response[1].length; j++){
        title = response[1][j];
        url = response[3][j];
        description = response[2][j];
        $('#searchResults').append(
          '<div class="card">' +
          '<h2 class="card-header"><a href="' + url + '">' + title +'</a></h2>' +
          '<div class="description card-body">' + description + '</div></div>');
      }
  })
}