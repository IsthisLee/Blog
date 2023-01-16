
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About 이건희",
    "body": "안녕하세요 초보 백엔드 개발자 이건희입니다.  소개: 기본이 잡혀있는 개발자가 되기 위해 노력하고 있습니다. My Site깃헙 등의 사이트입니다. Github Velog "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "       Fixed:                                                                                                                                                                                                           [mysql] MySQL id컬럼의 data type (INT vs BIGINT)                              :               MySQL id컬럼의 data type에 대하여:                                                                                                                                                                               이건희                                    04 Jan 2023                                                                                                                                                                   All Posts:                                                                                             [mysql] MySQL id컬럼의 data type (INT vs BIGINT)              :       MySQL id컬럼의 data type에 대하여:                                                                                       이건희                    04 Jan 2023                                                                              "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/mysql-id-column/",
    "title": "[mysql] MySQL id컬럼의 data type (INT vs BIGINT)",
    "body": "2023/01/04 - MySQL id컬럼의 data type에 대하여 1. 상황: ID컬럼이 INT 타입인 DB에 맞춰 typescript로 개발한 app이 있는데, BIGINT 타입으로 변경했더니 많은 에러가 발생함. \(변경 이유는 생략) 2. 원인: BIGINT는 INT와 달리 Number type이 아닌 별도의 타입(bigint)을 사용함. 전부 Number type으로 개발되어 있고, 비지니스 로직에서 계속해서 분리하여 사용해야 하는 번거로움이 발생따라서, BIGINT가 아닌 INT를 사용하여 번거로움을 줄이고자 INT와 BIGINT의 차이를 확인함. 3. 개념:    INT / BIGINT 특징               Type     Maximum Value Signed     Minimum Value Signed     Maximum Value Unsigned     Minimum Value Unsigned     Storage(Bytes)                   INT     2,147,483,647 (약 21억)     -2,147,483,648 (약 -21억)     4,294,967,295 (약 43억)     0     4             BIGINT     약 922경     약 -922경     0     약 1,844경     8           (INT, BIGINT 외의 타입에 대한 특징은 맨 아래 참고 사이트 참고)     id 컬럼에 적용 시 고려할 사항      BIGINT 사용 시, TypeScript에서 Number Type이 아닌, BIGINT Type을 사용해야 함.          비지니스 로직에서 Number와 BIGINT 타입으로 분리하여 사용해야 하는 번거로움 발생          id 값이 43억을 넘어가는 아주 큰 DB라면 무조건 BIGINT를 사용   43억이 넘지 않다면, 가능한 작은 타입을 선택하는 것이 속도 측면에서 조금 더 유리해 보임   4. 정리: 컬럼 수가 43억개 이상 넘어갈 정도로 큰 서비스 규모가 아니고, 속도 차이와 type 지정의 번거로움을 줄이기 위해 INT 데이터타입을 사용하기로 하였다. 피드백 환영합니다 :)  참고자료  MySQL 공식문서 "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});