
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
    "body": "       Fixed:                                                                                                                                                                                                           [mysql] MySQL id컬럼의 data type (INT vs BIGINT)                              :               MySQL id컬럼의 data type에 대하여:                                                                                                                                                                               이건희                                    04 Jan 2023                                                                                                                                                                                   All Posts:                                                                                             [mysql] MySQL id컬럼의 data type (INT vs BIGINT)              :       MySQL id컬럼의 data type에 대하여:                                                                                       이건희                    04 Jan 2023                                                                                                                                                      [Git] git the requested URL returend error : 403 해결              :       git the requested URL returend error : 403 해결:                                                                                       이건희                    13 Nov 2022                                                                                                                                                      [Prisma] prisma soft delete 적용하기              :       prisma soft delete 적용하기:                                                                                       이건희                    27 Oct 2022                                                                              "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/mysql-id-column/",
    "title": "[mysql] MySQL id컬럼의 data type (INT vs BIGINT)",
    "body": "2023/01/04 - MySQL id컬럼의 data type에 대하여 1. 상황: ID컬럼이 INT 타입인 DB에 맞춰 typescript로 개발한 app이 있는데, BIGINT 타입으로 변경했더니 많은 에러가 발생함. \(변경 이유는 생략) 2. 원인: BIGINT는 INT와 달리 Number type이 아닌 별도의 타입(bigint)을 사용함. 전부 Number type으로 개발되어 있고, 비지니스 로직에서 계속해서 분리하여 사용해야 하는 번거로움이 발생따라서, BIGINT가 아닌 INT를 사용하여 번거로움을 줄이고자 INT와 BIGINT의 차이를 확인함. 3. 개념:  INT / BIGINT 특징      Type   Maximum Value Signed   Minimum Value Signed   Maximum Value Unsigned   Minimum Value Unsigned   Storage(Bytes)         INT   2,147,483,647 (약 21억)   -2,147,483,648 (약 -21억)   4,294,967,295 (약 43억)   0   4       BIGINT   약 922경   약 -922경   0   약 1,844경   8   (INT, BIGINT 외의 타입에 대한 특징은 맨 아래 참고 사이트 참고)  id 컬럼에 적용 시 고려할 사항     BIGINT 사용 시, TypeScript에서 Number Type이 아닌, BIGINT Type을 사용해야 함.          비지니스 로직에서 Number와 BIGINT 타입으로 분리하여 사용해야 하는 번거로움 발생          id 값이 43억을 넘어가는 아주 큰 DB라면 무조건 BIGINT를 사용   43억이 넘지 않다면, 가능한 작은 타입을 선택하는 것이 속도 측면에서 조금 더 유리해 보임   4. 정리: 컬럼 수가 43억개 이상 넘어갈 정도로 큰 서비스 규모가 아니고, 속도 차이와 type 지정의 번거로움을 줄이기 위해 INT 데이터타입을 사용하기로 하였다. 피드백 환영합니다 :)  참고자료  MySQL 공식문서 "
    }, {
    "id": 7,
    "url": "http://localhost:4000/git-the-requested-url-returned-error-403/",
    "title": "[Git] git the requested URL returend error : 403 해결",
    "body": "2022/11/13 - git the requested URL returend error : 403 해결 1. 상황: 새로운 Git Repository 생성하고 다음과 같은 가이드에 따라 소스코드 푸쉬하는 도중 발생. 1234567echo  # -  &gt;&gt; README. mdgit initgit add README. mdgit commit -m  first commit git branch -M maingit remote add origin https://github. com/IsthisLee/-. gitgit push -u origin maingit push -u origin main 시, 403 에러가 발생함. Unable to access 'https://github. com/github_id/git_reposit_name. git'/ The requested URL returned error: 403 위 문구 발생. 2. 원인: 원격 저장소에 권한이 없어서 접근을 못함. 따라서 소스 코드를 푸쉬할 수 없다. 3. 방안: 인증을 통하여 해결 3. 1. 인증:  git remote set-url origin https://github-username@github. com/github-username/github-repository-name. git 입력 처음에 git remote add origin gitreposit주소. git 을 통해 origin 명칭을 만들었지만, 해당 주소에 대한 권한이 없어서 푸쉬를 할 때 에러가 발생한 것. 3. 2. 소스코드 푸시:  터미널에 git push -u origin master 입력 깃헙 패스워드 입력을 하라는 창이 나오고 입력 시 정상 푸시됨.  최초 인증 이후부터는 git push만 하면 기존의 세팅한 주소로 바로 푸시됨.  참고자료  언젠간 되어있겠지 "
    }, {
    "id": 8,
    "url": "http://localhost:4000/prisma-soft-delete/",
    "title": "[Prisma] prisma soft delete 적용하기",
    "body": "2022/10/27 - prisma soft delete 적용하기 1. 상황 및 원인: Prisma를 사용하여 백엔드 서버를 마이그레이션 중이다. 기존에 사용하던 ORM인 sequielize에는 delete 관련 Column이 있을 경우, sequelize 설정으로 간단하게 soft delete를 적용시킬 수 있었다. (typeORM도 된다. )그러나, Prisma에는 그런 기능이 없다. (이외에도 자잘하게 아쉬운 부분들이 꽤 있다. . ) 그럼에도 Prisma를 사용하고 있는 이유:  Node. js 와 TypeScript 를 위한 Auto-generated &amp; Type-safe 한 Querybuilder 제공1-1. prisma client 생성 시, model에 대한 schema와 type들을 완벽하게 인식하여 type 안정성이 높음1-2. 기존 DB를 사용하기 위한 간편한 Introspect 기능 제공1-3. prisma generate로 model 선언 불필요 여러 개의 prisma client를 활용하여 다수의 DB 작업 가능 GUI Database Tool(Prisma Studio) 제공(자세한 이유와 Prisma에 관한 내용은 다음에. . ) Prisma Soft Delete 적용 이유: prisma는 soft delete를 지원하지 않으나, 우리 서비스에서는 soft delete를 적용하고 있으므로 사용해야 했다. soft delete의 세부 동작은 삭제 동작 시, delete 관련 coulmn을 update하는 방식이다. 따라서, 비지니스 로직 중 삭제 로직은 delete column을 update하는 방식으로 구현하고 있었다. 이런 방식의 문제는 다음과 같다.  삭제 행위임에도 prisma opretaion은 update라는 mismatch 현상 data model의 delete column의 유무에 따라 operation이 달라짐따라서, delete column이 존재할 경우, 자동으로 delete column을 update하도록 middleware를 적용시켰다. 2. 방안: 2-1. prisma Middleware 구현: 다음과 같이 코드를 구현하였다. 123456789101112131415161718192021this. $use(async (params, next) =&gt; { if (prismaClient. Prisma[`${params. model}ScalarFieldEnum`][ deletedAt ]) {  const koNow = dayjs. utc(). add(9,  hour ). toDate();  if (params. action ===  delete ) {   params. action =  update ;   params. args[ data ] = {    deletedAt: koNow   };  } else if (params. action ===  deleteMany ) {   params. action =  updateMany ;   if (params. args. data !== undefined) {    params. args. data[ deletedAt ] = koNow;   } else {    params. args[ data ] = {     deletedAt: koNow    };   }  } } return next(params);});2L 에서 prisma 동작 대상 model에 deletedAt이라는 column이 포함되어 있는 경우를 확인하고, delete와 deleteMany operation을 update, updateMany로 변경시켜준다. 2-2. 위 방식의 문제점:  prisma operation으로 hard delete(DB row 제거)가 불가능하다.  soft deleted된 data를 다시 soft delete하여도 error가 발생하지 않는다. (deletedAt coulmn을 update하는 행위이므로)1번은 raw query를 작성하여 해결하고,2번은 soft delete 전에 해당 data가 soft deleted 되었는지 확인 후 실행하도록 로직을 구성해야 한다. 2번의 경우, 미들웨어를 사용하지 않더라도 발생하는 문제이기에 위 방식만의 문제라고는 볼 수 없다. 3. 정리: 1번 문제의 경우를 잘 생각하여 미들웨어를 통해 자동으로 변환할지 잘 판단하여 적용해야 할 것 같다.  참고자료  프리즈마 공식문서프리즈마 공식문서 - soft-delete-middlewareBlausee blog "
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