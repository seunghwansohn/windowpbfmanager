var fs = require('fs');
const path = require('path');


//*디렉토리 내 파일리스트 출력 변수에 저장
const dirPath = __dirname //directory path
var fileType = '.'+'pbf'; //file extension
var files = [];
fs.readdir(dirPath, function(err,list){
    if(err) throw err;
    for(var i=0; i<list.length; i++)
    {
        if(path.extname(list[i])===fileType)
        {
            // console.log(list[i]); //print the file
            files.push(dirPath + '\\' + list[i]); //store the file name into the array files
        }
    }
    // console.log(files);  //파일리스트 배열로 출력
    // console.log(files.length);


    //각 파일리스트 for문으로 순회하며 콘텐츠 변경한 뒤 regex로 변수 따서 html 만들기
    for(let i=0; i<files.length; i++) {
      fs.readFile(files[i], 'utf16le', (err, data) => {
        if (err) throw err;
        var text = data;
        var reg = /\*\S{1000,}\s/;
        var changeto = `\*
        `;
        var k = 1;
          while (k < 100){
            var findtest = reg.test(text)
            if (findtest == false) {
              break;
              };

        var resulttext = (text.replace(reg, changeto));
          text = resulttext;
          k++;
          };


          fs.writeFile(files[i].replace('.pbf', '.txt'), text, (err) => {
            if (err) throw err;
            console.log(i + 'number' +' the file saved')
          });
            console.log(i);
      });
    };
});

// var text = `[Bookmark]
// 0=38824*펜툴의 선택*2800000048000000480000000100200004000000120700000000000000000000000000000000000000000000FFD8FFE000104A46494600010200000100010000FFFE00104C61766335382E35322E31303000FFDB0043000806060706070808080808080909090A0A0A090909090A0A0A0A0A0A0C0C0C0A0A0A0A0A0A0A0C0C0C0C0D0E0D0D0D0C0D0E0E0F0F0F1212111115151519191FFFC4009E00000202030101000000000000000000000007050402060803010101010101010000000000000000000000000102030510000201030202050608090D0100000000010203040011120521312261511306714191540714D29294155316D332935217B18123D4624244B4D1C155A4A3A2337425A1958411000202010107050003010000000000000102001112215171914131F003A181041361B1526222FFC00011080048004803012200021100031100FFDA000C03010002110311003F00E7FB2E58786B762322981F24F4E4FA3BDCDE3F57774F575FC3D3FDADA6B06FEA78191765CAFD5CDD3E817E514DF6BD5787CC1B9FABFF008B0FDA5A8C98B6C3C246D9725F30EE7EAC7E3C5F0ECF98373F563F848BE1DDC4EC3C228EC3236CB92F98373F563F1E2F87790F0EEE8413EEE3876CD003E83264FE8B62761E11476191765CC8F0AEF654B8A366519C9592138C73CE2438C75DF9FD5CDDBD51BE3C5F0ED8B6C3C228EC31DBE03DA69F768F735A8697BBA65A42AB1D3524D2C8D52E63D24D44333100FDD518C64DEEF49E11D9A494430D5D5249968CA1DBB6D4D2CA0931B1F73C0F38ECC8B82F654B534D2F88C47111531D1D31489D483DF0494A2956C1E2D8ECBB34DED4B76A68DA2ACDB69E5A98E591243DE3C3A4A31528556393A4B8E273C6F273CAD58573056FDC1B13A214C5B25724730C0017D2C107F65F3E19D8D847DF5655294034A350ED8FA01E582B4657901E5E43241BB23D9FEC8CA8CFB8321741285920DA9582CB83923DD7CE71D59B9CF07789A4F145354CD2D2252B4132C5A564326AE8070D9644EDE1C2F6428A79A83E502EA7D80FFD303B968FBEB0EDE32060AE0F3B6047B680F19A01F66DB111C6BB23AE9F6AC7F35BFBF936D88FF2C4F926D3FB25EFA5630092A800E24903181DB7E74EF054C4B2C6A0AB72CA80781C71078839BD6601032D4DD0BD4D75E162632FD9A47E4CB65F59FEE5B5FEC77A878F3C214FB2434228D1EA52AA496391A3A3A4578DD535C215E9A9E37E990DA97F8954DBB34AF60F40B587B5E768DF61D15135291355BACB0B32B2CA9127747A3FBC719F3026CC681DC65BD4024D5EBCFD2297E6D915262D0562698F52931D40E90233925318D39CE703AEE87732F64DFE7B92AF35754ED2D5EED3BAA44E13156D217206A688C6AC5D433F0D520D27C970FAC7E3547C7B81942AE6CC18A824052C05F20C3A8FDA1BA74F0F8D5903795DD09BA0AA1C55D0379A107F088E8F66AD4F415FBFBA57AEE91474942C6A620FD2D225053F58724AE3CE6D982A699B8E06A3A8E9D2351C64F9327CDC6D3FEC59C5436FFAD632A62A652AF9098CC9C0F3C0B6CC5343A43A8A3C3AE32B29E27CE0743975DE50AAA80723A7555D3D050900F190DD46BA532D557FA37D67BD35752CF8589D7530CE9D241E59E3C319039DDBBA14AF474E300D3444B1188DF232072C900E7AAEEABABA8652181E447237B06C5FF22BD0CC55777232A3DE1A5682797F57264A08D1409107DE4663A98301F7B180CBCBCE2F16EFE3934D34843CCC5BBB28AD1E4001A46270CA00C670789E4326EE54D23D44D1B097BB5447074A82E7595FBA4E42F05E7827B2F04A068A78A459999135E524E9361D71D193EF6338386CF96FC6F91F0FE637CCFB11BCC5159407CD73547ACFEB1CD46BCB8CE75D7424DE87B3DF397575051A882703240C64F6E3271E4CDAA7DB52EB4D8C76CB57E6CFF045D6390E36D7B547B6A6D0BB11E1FEAD5F3C7D1C7DB917EC014376D9B8A6962511F45812572DA8818F36955D7963FD5E6BA5DDF58F41FE9B94AC68E34C685467C107BD81F869E3909D2049E209C70E171DA97F197D3762313D88D5C14C37B3354C316A480234D2A4218A97C805F870F3F3C5B5A3DD28D61457DC688371CFFCAC5C8F23AF402DFA40BE28F7DA9C63BD603AB039F3E43CF7F0D5D41E72138E0338381D8385C1A4C8D04EDD1BE6DD1104EE5B6E7910FBA4440EBC15E27D1791F126DA0F0DC368FF00D28471F45F1453EF35F4B198E2954216D6434303F4B00673246C790E59C5D85F136EAA9A04D0E9FF0067447FECC19B5CB73B54788B65C0CEEBB603E702B69C8CF51D63F35FD3E20D9873DD36E1FF00D94FF697C52DE26DD59594CD16190A1C52518E8B731C201E9E775A3DDEB62732248BA882B930C0DC0F534645AE5BEFBA9DBFF58365FED4DBBE594FF696B0F6C5B8525726CBEE9534F52525AAD5DC4B1CA543471E350466C678E337CDD36ED593C4B0C8E8514860041029C8040CBAC61CF02799BAE2A2553957653FBBC3F362D725C64C934D312EC4938E24281C875002FC75BF69B5F7BED4FD349F1ACF7CA9FA693E31BB96FE3173C2CB2CBCC90B2CB2D10B2CB2D10B2CB2D10B2CB2D13FFFD9
// 1=125334*펜툴의 닫힌 도형 그리기*2800000048000000480000000100200004000000660700000000000000000000000000000000000000000000FFD8FFE000104A46494600010200000100010000FFFE00104C61766335382E35322E31303000FFDB0043000806060706070808080808080909090A0A0A090909090A0A0A0A0A0A0C0C0C0A0A0A0A0A0A0A0C0C0C0C0D0E0D0D0D0C0D0E0E0F0F0F1212111115151519191FFFC400A10000020203010100000000000000000000000507040203080601010101010101000000000000000000000000010203051000020103020205050C050D0101000000010203040011120521316141220613145154079153819216941517D393D23271B1426224D4D1A323C1A274A1F05584955234332511000103020503030403010000000000000102001112219141513103137181A104616252F10522324214FFC00011080048004803012200021100031100FFDA000C03010002110311003F00E7FB2DB0EED6EE4645303F94F4E4FB3C5CDE3F17775F471F6F4FF5B67AA15F69C0B5765B5F8B9BAFA3AFDBD37D6DE1F306E7E8FF00CEC3F59760E8E52AD0E0D6D96CBE61DCFD18FDA45F7ECF98373F463F6917DFB527438341D0B5B65B2F98373F463F0E2FBF790EEEEEA413E4E3879E6801F7819327DEB52AD0E0D0742D5D96E477577B2BAC513328CE4AC901C6389CE2438C74DEBF8B7BBFA237C38BEFDA956870683A1735F71366A5DE1371155AF4D2AD21411D3D24F2BB54B98F4EAA88666201C690318E37ED60EE46C1533784B3D4090B34655B6DDB574B2024A31347807811E6C8B4FEAA96A69E5EF188E261531D1D31489D483E30498A2956C1E2D8F35D9A6F5A3BB5346D1566DB4F2D4C72C8921F11E1D2518A942AB149DA5C7139E3793D4AA52A1198227C8321F441452AA92B247FA0A0009DA4106737693BA3DDE4C33544F13F03A7C836B62339EB5A32397B7381939BBABEAFB6329196DC1A3D48B304920DA958093AC8F25EBCE3CD9B63B177A373EF2ED3B8D451D0D2C15D4EE23A78E695DE177D0AE0C8DA6360BC4F2B69B24BBD0A79E4EF0C7B6C0EB20111A42DA0C5A47E3F119CEAD79C00795D4F507F65822348F26F0CB57191FC12B49CE5408F160717E73E8DF63C7FEFE0789FDDF6AC1E93FBAD9F46DB17A5A7C9369FE12FDAC1534F51E2E10A08F04991026508C87C1E214E0FE200F0E57B29DE0A989658D4156E59500F038E20F1073647371AE295A553310A06693063583BBC55F2FC47D196CBE923E45B57F077E43BF9DD0A7D921A11468F5295524B1C8D1D1D22BC6E89AE10AF4D4F1BF6C86D4BFACAA6E6CD2BE61EC17187ADE7689F61D15135291355BAC90332B2CA9127847B3FB4719EA04DD51B78766E01277EFE8E253B748A931682B134C7A9498AA0768119E25318D39CE703A6E87832F9A6FEDDB3AE35754ED2D5EED3BAA44E13156D216206A3118D58BA867E1AA41A4FE569FC41FF006A8F856052129AD4A0A29048092A02720A1B8F03B3E9C3C695202B916B413301290B11300CD6820FC10E68F56AD4F415FBFBA57AEE91454942C6A620FDAD225057FA4392571D67AEE4B1514CD9381ABB474E91A8E327F2C9C70E370FFA967150DBFEB58CA98A994ABE426332703CF02E598A684A875147875232B29E27AC0EC72E9BCA0A52900D46D6294DBD040700E35056E2F68526223EA33BBDF4D5D4B390B13AEA619D3A483CB3C786380E77F2A605322CCC351030BA8E4274A8E409EB6E7D37852B51D38C034D112C46237C8C81CB24039BB6CB154C7860B246D8E956C1CFBFC6F9FBAE1FFABDBAF8EE2A4DA645C5C4E713B87CC88B183EAD3391513A2A1711BC7223B8184995086D0AD83AB049D446060900DEE6F1A3934D3484493316F0CA2B47900069189C3280319C1E2790C9BB75348F3CB132CBE12468EB8551ABB457F093D95E0B8CE0F45E2940D14F148B333226BCA49DA6C3AE3B327E2C67070D9FCEFC71FADF79C3CC9A15C9420A47510A09202E3A9D3493B0CE778D9E0E763322E3F2EEAEA0A35104E064818C9EB38C9C7E59B8A7D752EB4D8C79E5ABEACFEA45D2390E372BDC51EBA9B42EC4787FF5ABE78F738FCFC2FDE020667BDDEB27134B1288FB0C092B96D440C756955D7963FD5D574FC2FF00383FCB6CEB1A38D31A1519F041F1607E1A78E4276812788271C385AECAF9C7B6EBAE45F523570532EF666A9862D4900469A5484315D7900BF0E1D7CF19B9563DD28D61457DC688371CFF00FAB1723C8EBD00B7BE05F14796D4E31E2B01D181CF9F21D77F0D6541E721381819C1C0F30E17059E4583EDD1BE6DD1302772DB7CC43EE91103A705789F65E47BC9B6E786E1B47FC94238FB2F8A29F79AFA58CC714AA10B6B21A181FB58033978D8F21CB38BB0BDE6DD553409A1D3FDCE88FF008983369765F6A8EF16CB819DD76C07AC0ADA7233D0758FD1791EF06CC39EE9B70FF794FF00597C50DDE6DD59594CD1619190E2928C765B98E100F6F3BAD1EEF5B13991645D4415C98606E07A1A322D2EC8F97DBFF18365FF0054DBBE594FF59718FAE2DC292B5365F24A9A7A9292D56AF0258E52A1A38F1A8233633C719BE6D9B76AD9E2585DD0A290C0082053900819758C39E6799BAE2A2553957653FB3C3F462D2E4B92649A698976249C713A40E431D400BD3A9FCE6E3EF2DA9F7693E159E5953EECFEDBB577C5A5E8B2CB2F2E32CB2CB332CB2CB332CB2CB332CB2CB33FFFD9
// 2=146796*곡선그리기*2800000048000000480000000100200004000000370700000000000000000000000000000000000000000000FFD8FFE000104A46494600010200000100010000FFFE00104C61766335382E35322E31303000FFDB0043000806060706070808080808080909090A0A0A090909090A0A0A0A0A0A0C0C0C0A0A0A0A0A0A0A0C0C0C0C0D0E0D0D0D0C0D0E0E0F0F0F1212111115151519191FFFC4009D00000202030101000000000000000000000005070402060803010101010101010000000000000000000000000102030510000201030202050609080B01010000000102030400111205213122415106139154610771143281D353D2169442159392B16223D45217C1D15525A3A2A1744495F03384110002020004060202030100000000000002010011411221917151813104036113A1F062B15222FFC00011080048004803012200021100031100FFDA000C03010002110311003F00E7FB2DB0EED6EC4645303EC9E9C9F278B9BC7EAEEE9E6EBF97A7F95B4D642FF2F6715D96D7EAE6EBF30BF68A6F95F45E1F806E7E6FFE2C3F29769F29329727B45B65B2FC0773F363F948BE9D9F806E9E6C7F2917D3B657C9ED14F938B6CB65F806E7E6C7F3E2FA7790EEEEEA413EEE3876CD003F103264FC56CA5C9ED14F938AECB723BABBD95D628999467256480E31CF3890E31E9BF3FAB7BBF9A37E7C5F4ED94B93DA29F2726DEE1ED14FBB47B9AD4B49A299690AAC74F493CB2354BB47A49A886624038D20631937BBD2F7476692510C357549265A32A76EDB534B2824C6C7DCF03AC76645A3F556B534D2F78C47111531D1D31489D483E30498A2956C1E2D8ECBB34DEB4776A68DA2ACDB69E5A98E591243E23C3A4A31528556293A4B8E273C6F2FECCD624AB14D5F5BB53A030CA5984DB58A2496BDAD34EF1978F76763611F8D5952A500D28D43B63E807960AD195E407B790C906EC8F57FB1B2A33EE0C85D04A164836A560B2E0E48F75EB3F166D8EC5DE8DCFBCBB4EE35147434B05753B88E08E695DE177D0AE0C8DA6360BC4F2B6BB049BDC8932EFB16DB1CFAC78228F59062D233AFC467C36ACE003C85D1FB13FF00A24F80D3EBAC197ADA5904C5E3649AE9A27BCD68FAB6D888E35D91C39D3ED58F47FC5BFBFCB6D8BCED3EC9B4FEE97BE958C024AA00389240C6076DF9D3BC15312CB1A82ADCB2A01E071C41E20E6F59D5A57ABBA57ABAEFB5A98CDF3349FE596CBE723EC5B57EE97A877F3BA14FB2434228D1EA52AA496391A3A3A4578DD535C215E9A9E37E990DA97EF2A9B9AF4AF60F20B8C3D6F3B44FB0E8A89A9489AADD65859959654893C23D1FD638CF5026E13A5D1CB7AA4DBEFC7F12263B748A931682B134C7A9498AA0748119E25318D39CE71EDB5FE0CBD937F9ED9D79ABAA7696AF769DC244E13156D217206A3118D58BA867E1AA41A4FB2D3F883F8AA3F3AEA6284731122629B48592578225DD7CD2E13A7A7D62408BD8660DDD21146AAE93BCE0D3F86A4D1EAD5A9E8370DFDD2BD7748A2A4A16353107E9691282BFB4392571D67AEE4B1514CD9381ABA474E91A8E327D993D5C6E20F52CE2A1B7FD6B19531532957C84C664E079E05CB114D0950EA28F0EB8CACA789EB03A1CBD3780622293CCF4D188E9F854A44BD648FBAD74A21AAAFE4EFBE33DE9ABA967C2C4EBA98674E920F2CF1E18E039DD9D0A5B5E91A80C06C71C758CFB6E952BD1D38C034D112C46237C8C81CB24039BBAACAEA1948607911C8DE96AAF5EAABFB9CEA9C5951EF0D2B413CBFB393250468A04883E12331D4C187DEC6032F2EB178B78F1C9A69A4224998B786515A3C800348C4E194018CE0F13C864DDCA9A47A89A3612F86A88E0E9505CEB2BF049CAAF05E7827B2F04A168E78A459999135E524E9374D71D193E16338386CFB6FC7F23C3F30BCCFB00BDCC048523CE39C40EB3AF5AC4570DE61E3A36EF47FAF8CBABA828D4413819206327ACE3271ECC9B8A7D752EB4D8C76CB57D59FB917A4721C6E57B8A3D74B681B11E1FFD6AF9E3E6E3EDE17EC254B1EBACD489A589447D060495CB6A2063AB4AAEBCB1FE8EABA7E17FEC1FEBB6758D1C71E342A33E083E2C0FC34F4B213A4093C4138E1C2D76A5FE21E51765922FA91AB829977B3354C316A580234D2A4218A97C805F870EBE78CDCAB1EE946B122BEE3441B8E7FBD62E4791D7A016F8C0BE28F7DA9C63C5603D181CF9F21D77F0D6541E721381819C1C0EC1C2E2D26568A76E8DF36E89813B96DBD843EE91103D382BC4F92F23DE4DB73C370DA3FECA11C7C97C514FBCD7D2C6638A550A5B590D0C0FD2C019CBC6C790E59C5D85EF36ECA9A04D0E9FF67447FD4C19B5CB73B54778B65C0CEE9B603D6056D3919F41D63F45E47BC1B30E7BA6DC3FFD94FF00297C50DDE6DD59594CD1619190E2928C655B98E100F2F3BAD1EEF5B13991645D4415C98606E07D0D1916B96D7CFEED3B7FEB06CBFDA9B77DB29FE52E31F5C5B852D6A6CBEE7534F52525AAD5E04B1CA543471E350466C678E337CDD36ED5B3C4B0C8E8514860041029C8040CBAC61CF33CCDD61512A9CABB29FD5E1FA316B92E49324D34C4BB124E3890A0721E8005F8EB7ED371F7BED4FCF49E5B3DF2A7E79FCB77371DE2E78596597992165965A2165965A2165965A2165965A27FFFD9
// 3=212768*기존 오브젝트에 이어서 그리기*28000000480000004800000001002000040000002F0700000000000000000000000000000000000000000000FFD8FFE000104A46494600010200000100010000FFFE00104C61766335382E35322E31303000FFDB0043000806060706070808080808080909090A0A0A090909090A0A0A0A0A0A0C0C0C0A0A0A0A0A0A0A0C0C0C0C0D0E0D0D0D0C0D0E0E0F0F0F1212111115151519191FFFC4009F00000202030101000000000000000000000005070402060803010101010101010000000000000000000000000102030510000201030301020808090D01010000000102030004111221053113066191415471510722151614929453D2D33223D4629317B14281C1A3B4D1A2259533A155528474F0441100020201020406020301000000000000020100111221413151039113B18171610462A152D122F0FFC00011080048004803012200021100031100FFDA000C03010002110311003F00E7FA29B0EED72C4645B03E89EDC9F176B9AC7E2EF29E6EBFA7B7FBDA4D605FC5F6715D14D7E2E72BF50BF48B6FBDF0561F00727E6FFCEC3F79569F29312E4FB45B4532F80393F363F3E2FB747C01CA79B1FD245F6E98BE4FB453E4E2DA2997C01C9F9B1F9F17DBAC8777795209F938DBD73400FF000064C9FE14C4B93ED14F938AE8A723BABCD95D62C999467256480E31B9CE2438C786BCFE2DF2FE68DF3E2FB74C4B93ED14F93936F70F88B7E5A3E496E5A4D16CB685563B7B49E591AE5DA3D25AE2198900E34818C64D6EF6BDD0E1A494430DDDD249968CA9E3B8D5D2CA0931B1F91E07423D59148FD95ADCDB4BDE311C445CC7676C5227520F6C12628A55B0776C7AAACDB7B51E5ADA368AF38DB796E63964490891E1D2518A942AB1C9EF2E3739DEB2FC4CAC4956E9ABF5BB53A0B0C4B2136D6E892ABE169A77BCBC7BB1C1B08FB6BCB9528174A358F18FA01E982B6657A01E9E83241AB23D9F706CA8CFC8321741285920E295809707241B5F29C78334C782EF4725DE6E2791B8B3B2B6B7BEB7711C11CD23BC2EFA15C191B4C4C1773D299F77A6E76749873B6B6714DDA0109B4490C6620A33ACBBBE0EBCE37E98A0E69FFA34FD953F3832E9B4B01317BD926BD344FBCD74FB36E08E337D91B75B7E2B1FD168FD5B7047FF00D69F44E27F24ADF4AC601255001B9240C607AEBCEDDE0B989658D4156E99500EC71B83B839ADE6AD2BD5DD2BD5D71ED73197CCD27F565C2F9C8FA1715F91D6A1DFCEE85BF090D88B347B94BA9258E468ECED15E3754D70857B6B78DFDF21B52FEF2A9A9AF4AFA87885461ED79DA37E0745C4D6844D76EB240CCACB2A449D91F77F38E33E404D4274A5BD52B7C7DFF52263C748A931682F134C7A9498EE07BC08CEE5318D39CE71E9A5FD94BEA9BFB74CEFCDDDD3B4B77CB4EE1227098BB690B9035188C6AC5D433EDAA41A4FA293F683FE571F3AAA6284722244C53690B24AF644B8AF9A5ED3A747A62408BA8660DDD21146AAE93BCC1A7F0D49A3D9AB5BD8721CFBA5FAF291C56962C6E6257F7B489415FC61C92B8F29F2D4962E6D9B270357BC74E91A8E327D1938DB7A883D8BB8B86E7F5AC654C56CA55F213199363D702A588A6874875167875C65653B9F281EE74F0D601888A4F27A68C474FD2A5225D3247C56BA510D557E4EF8CF7B6BEB59F0B13AEA619D3A483D33BED8D875AB7542D5ECEDC601B688962311BE4640E99201CD5D575750CA4303D08E86B69DABD7CBCE73AA7AFF007165C0B8695A09E5FC5C9928234502441F848CC753061FBD8C065E9E5158B76D1C9A6DA4224998B766515A3C800348C4E194018CE0EE7A0C9AB97368F71346C25ECD511C1D2A0B9D657F049CAAECBD704FAAB04B068A78A459999135E524F79BDF5C7BB27E16338386CFA6BC6FB1F4FEE17DCF100BACC048523CC73103ACFC35B8AB7B6DBCCD71D1BD742FF9CBABA828D4413819206013E538C9C7A33514FB6A5D69C18F5CB77E4CFEE45E11D06F52BD451EDA5B40E08EDFE6DDF5C7D5C7EBC8AF612A5BFAEAE5AA9134B1288FDC60495CB6A2063C9A5575E58FF2792A9F65FF00D83FD74D2F1A38D31A1519F041ED607DB4EF909EF024EE09C6DB52DCAFAC78EACB245F6237705B2F3666B9862D4B00469A54843152F900BEDB797AE3352B45CA59AC48AFC8D906DF3FDEB16483D0EAD00B7F102B89FE5B738C76AC06FD303AF5E83CB5F3E5971B7E30EDB0E9B7A36DAA2D26568A76E8E6F8E89813C8F1D9C6E1F948B03C382BB9F15647BC9C6E76E4388FF12846FE2AE28B7E6AFED6331C72A852DA88686093DEC01D648D8F4036CE2AC2F79B9654D026874FFE3B23FEA60CD2E5B9DAA3BC5C3606794E301F2817B6E467C0758FD9591EF070C3AF29C70FFB96FF00795C50DDE6E559594CD1619190E2D2CC655BA8DA01E3EB55A3E5EF627322C8BA882B930C0DB1F0346452E54FDD4EDFF8C1C2FF00BA71DF4CB7FBCA8C7DB1721697A9C2FC92EADEE4A4B75ABB096394A868E3C6A08CD8CEF8CD7374DCBDECF12C323A14521801040A7201032EB1873D4F535585C4CA72AECA7F376FD98A5C972499269A625D89271B90A0741E000578EB7F59A8FBE5B73F5D278E8F965CFD73F8EAE5EFDE2E78514515992145145221451452214514522145145227FFD9
// 4=326313*추가점에서 곡선 그리기*2800000048000000480000000100200004000000470700000000000000000000000000000000000000000000FFD8FFE000104A46494600010200000100010000FFFE00104C61766335382E35322E31303000FFDB0043000806060706070808080808080909090A0A0A090909090A0A0A0A0A0A0C0C0C0A0A0A0A0A0A0A0C0C0C0C0D0E0D0D0D0C0D0E0E0F0F0F1212111115151519191FFFC400A1000002020301010000000000000000000000050704020608030101010101010100000000000000000000000001020305100002010302020507050B0D01000000000102030004111205312113415122066191715407141615D2D393238192B1946242533224D417A3D125C1A2A19574525584F03433110001030203070403010100000000000001000211122191035171618141223104A11342F0E152B16232FFC00011080048004803012200021100031100FFDA000C03010002110311003F00E7FA29B0F0D6EE4645B03E89EDC9F3097358FC39BAFAB8FAFB7FA5A2D50EFD4E052BA29AFC39BAFABAFD7DB7D2D63F0FEE9EAFFCAC3F49560E8A52ED0E096514CBE41DCFD58FD645F3E8F90374F563F5917CFA527438241D0A5B4532F90373F563F7F17CFAC8787775209F771CBB66801FB80C993F7294BB438241D0A5745391E15DECAEB164CCA3392B242718E673890E31E5AF3F86F77F546FBF8BE7D2976870483A1536781366B6DE1371175AF4DAADA1411DBDA4F2BB5CB98F4EAB886524038D20631CEB7483C13B05CCC2259EE04859A32ADB6EDABA590125189B3C03C88F48A4FECAD6E6DA5F1188E261731D9DB1489D483D30498A2956C1E6D8ECAB36DED4776B68DA2BCDB6DE5B98E5912422478749462A54AAC5277971CCE79D64FB9574B8473044F10642E8D2CA5D535E48F907002FDA410679F656D3C25E1E4D2CD713C4FC8E9F93F6B6233E55B323879F381939AB8BECFF006329196DC1A3D4AB304920DA958093AC8F75EBCE3B334D7C39E27BEF13ED9B8CF059C16D776E4C7024923C913CBD16B8CC87446C1351E78EAA61E1EF88A4173F2F45B629063F77365D21C8C3749D2748CD8C1D3A707B6AB7DC07A9C08DC20F1BA3DD9647435E0F3970238581C56B9FC37D931FFBF91E67F67DAB07CA7F65A3F86DB17ADA7E29B4FEE95BBDE4896B0493743D26800E85032DCC0C0E5C6B385A19E359115483E41907AC1EC20F22388357DC6D54D42A8AA26F13131A4AC55BD691FC32D97D647E25B57EE75A878F3C216FB243622CD1EE52EA496391A3B3B4578DD135C215EDADE37EF90DA97F3954D4D7A4760F30A8C3DAF3B44FB0E8B89AD089AEDD64859959654893A23DDFCA38CF50268E36C559922E7BEDF45131DBA45498B41789A63D484C5703BC08CF3298C69CE738F4D2FE8A5EC9BFB74CEFCDDDD3B4B77BB4EE1227098BB690B9035188C6AC5D433F2CC8349F4527E907FAEE3EF8501686B6A73838B412034B809E41C3B8E0362E99396D7301CC7BD84CC06B43C44C0335B083B885347B366B7B0BFDFDD2FD7748A2B4B16373107EF691282BF68724AE3ACD4982E6D9B9E06AEF1D3A46A38C9E5D593D5CEA1FF62EEB70DBFEB58CA98AD94ABE426332723C702A588A6874875167875C65653CCF581DCE1E5ACB0B5AD00D46D62D6DBD040500CB707F717B439B111FE8CF75EF6D7D6B3E16275D4C33A749078679F2C721C6ADD50B56B3B71806DA22588C46F9E6070C900E7C9575595D43290C0F02381AD83226FC6DFD5CE20DFEE0965C0B8698C33C9F66CDAE3091A85758D83696275306538CF00C38758AC5F54727D834AB2CB93A23D1872B8CBB748AC8B8C80CDC89E5C4E2AE5CDA3DC4D1B097A35447074A82E7595FD5272ABC978E09ECAC12C5A39E291666644D79493BCDDE5C7764FD6C67070D9F4D78BE4F85E5BFCB398C767501CD01F58ADAD77FD502412D6C9FCACC1BD89BD8FD3C97BDAA5C227ED12ACAE4FE6A850A3B3901ABD3819EC1517FB6A5D69B18ED96EFAB3F991794701CEA57A8A3DB4B685D88F2FF00EB77C71FA38FB722BD86328606D4E747C9E6A71DE4AA046B65134B0A88FBAC092B93A88181C34AAEBCB1FEAEAAA7D17FDC1FE7A6978D1C698D0A8CF820F4B03F2D3DEC84EF024F304E3972A5B95ED1E7AD2AA45F6237705B0DECCD730C5A96008D34A90862A5F2017E5CBAF8E2A568F74B358915F71B20DCF3FD2B1670781D7A016FBA05713FBEDCE31D2B01E4C0E3C780EBAF86F2E0F1909C7219C1C0EC1CAA0B2C8B05DBA37CDBA2604EE3B6F610FBA4440F2E0AF33E6ACCF8936DCF2DC368FF00128473F35713DBEF37F6B198E2954296D6434303F7B00673246C780E19C5585F13EECA9A04D0E9FF0027647FBCC19A4AB2BB54788B66C0CEE9B603D605EDB919F21D63F05647C41B30E3BA6DC3FE65BFD257143789B7660CA668B0C8C871696632ADC4728079F8D568F77BD89CC8922EA20AE4C303723E468C8A4AA0ED0BB7FE20D97FDD36EFC72DFE92A31F6C5B85A5EA6CBEE9736F72525BAD5D04B1CA543471E350466C679E335CDD36ED7B3C4B0C8E8514860041029C8040CBAC61CF13C4D56171329CABB29FC9E5F8314952549324D34C4BB124E3990A07018EA00578EA7ED351F7BEDCFE9A4F3D1EF973FA67F3D5AB6E292BC28A28ACA88A28A2888A28A2888A28A2888A28A288BFFFD9
// 5=590195*포인트 삭제*2800000048000000480000000100200004000000700700000000000000000000000000000000000000000000FFD8FFE000104A46494600010200000100010000FFFE00104C61766335382E35322E31303000FFDB0043000806060706070808080808080909090A0A0A090909090A0A0A0A0A0A0C0C0C0A0A0A0A0A0A0A0C0C0C0C0D0E0D0D0D0C0D0E0E0F0F0F1212111115151519191FFFC400A200000202030101000000000000000000000005070402060803010101010101010100000000000000000000000102030504100002010302020507050A0F01000000000102030004111205312113516141065415140793912253D31671D29481B192D452173224422334A3C162D1A274A155829584254433110002020101070402030101000000000002010011122141519181310304612271A113B16205D14252FFC00011080048004803012200021100031100FFDA000C03010002110311003F00E7FA29B0F0D6EE4645B03F54F6E4FB84B9AF9F47375F275F6F6FF3B49AC0BFF2F838AA8A6BF47375F275F6F6DF3B58FD1FDD3C9FF9587E72AD3DCE4C4B73E116514CBCC1B9F931F6917DBA3CC1BA7931F6917DBA62F73E114F738B68A65E60DD3C98FB48BEDD643C3BBA904FA38E5D73400FDE064C9FBD4C4B73E114F738AE8A723C29BD95D62C999467256484E31C73890E31DB5E7F46F77F246F6917DBA625B9F08A7B9C9B3C09B35AEEE9B88BAD7A6D56D0A08EDAD2795DAE5CA69D5710CC48071A40C639D6E90782761B99BA259EE04859A32ADB6EDABA590125189B3C03C88EAC8A4FEAAD6E6DA5F1188E222E63B3B62913A907A60931452AD83CDB1D5566DBD68EED6D1B4579B6DBCB731CB2248448F0E928C54A1558E4F8971CCE79D65FE4CBDA4AB6A6AF9A76A74161896426DAFF00A44975E969A77B65B4F097879305AE2789F91D3E6FDAD88CF6AD995E1EFCE064E6AE2FABFD8F4465B7068F52ACA124836A56024EF23D17BF38EACD35F0E789EFBC4FB5EE33C1676F6D796E4C7024923BC4F2F43AE3323688D826A3CF1DD4C3C3DF4864171E7E8B6C56063F47F42121C8C36BE93A466E074E9C76D51FC89FB8935E8A9F3D60CBB6D7B04C5EDB24D72D13E335DFD1BEC98FE3FC8F33FB3ED583DA7F65AF9FA36D88FF00EB4FB9369FC92B78B9922B7504C7AD9DB4AA2AAE59B04F7E0000024927000AF017D6E1353464481CA742155A42E0038500E08C10DAB3A707991592F27B4078177004B1658B249E2BA97C4C65EB351FD196CBE523EE2DABF23AD43C79E10B7D921B11668F7297524B1C8D1D9DA2BC6EA9AE10AF6D6F1BFC6436A5FDE5535334134370BAA3C1C1C32918656FCD653CC1FAEA35F5BCED13EC3A2E26B4226BB759616656595224E88FC3FD238CF7026B59A21C849126AD34F47CD5CA9DB5ABA6FAAD7EA44DE6D9024C5A0BC4D31EA4262B81F10233CCA631A739CE3EBAA1D0CBD537F6E995FB5DDD3B4B77BB4EEA91384C5DB485C81A8C463562EA19F96641A4FD549FA41F9D71F8C2B498A11C8891314DA40C92BD889755C97C4E9D9ED89022EE19837748451AABA4EF3069FA549A3D5B35BD85FEFEE97EBBA4715A58B1B9883FC5A44A0AFF0008724AE3BCD4982E6D9B980357C474E91A8E327EAC9EEE750FFA9765B86DFF005AC654C56CA55F213199391E38152C45343A43A8B4C3AE32B29E67BC0F83876D601888A4F27A7511D3E952912ED923EAB5D3DC3555FC9DF59EF6D7D6B3E16275D4C33A7041E19E7CB1C855BAA16AF676E300DB444B1188DF232070C900E6AEABABA8652181E047035A4ED5EBCD57EE73AA7AFF00BFA8AEE16E1AE5526970BAFA483A38D403A47347275306009CF00CA797550E6DE0935B3471BCBC8B3722E1070D47801CBAAAD5D5A3DC4B13097A25457074A82E75E9FD5272ABC871C1E3580DBCA4F13ACCCD1A6BCC72FC670E8548127EB6338386D5D845787E6FF5DE4F7FC9321446160911B16D27D711B4D885BF5995A5E8DEBA38589CDC5D118391073FF41A8DFD752EB4D8C75CB77DD9FDC8BB4701CEA528ADE180B18A348F5E0B6918C91C390E55177AE96D0BB11E5FFD6EF8E3E4E3EBC8AF53C1F1CBC5F1C7B44C5B165A8DD6A4DEDA72EBF7225961511FC2C092B96D440C776955D7963FCDDD54FA31D9EE3FD74D2F1A38E3C685467C107A581F9691AB213E2049E609C72E54B72BD63DF5F4CB245F5257705B0DECCD730C5A96008D2CA90862A5F2017E5CBBF8E2A568F74B258915F71B20DCF3FF006B1703C0EBD00B7DF02B89FD3AE718E9580ECC0E3C780AF86F2E0F1909C0C0C80703A872A8B4995A29DBA37CDBA320F9CB6DEA21F748881DB82BCCFBAB33E23DB73CB70DA3FDCA11CFDD5C4F6FBCDFDAC6638A55085B590D0C0FF1600CE5E363C00E59C5585F13EECA9A04D0E9FEE7647FC4C19A5CB73B54788B66C0CEE9B603DE05EDB919EC3AC7E0AC8F883661C774DB87FCCB7F9CAE286F136ECC194CD1619190E2D2CC655B88E500F7F1AAD1EEF7B13991645D4415C98606E47B1A322972A7F2A76FFD20D9BFCD36EFBB2DFE72A31F5C5B85ADEA6CBE897305C9496EB57412C72950D1C78D4119B19E78CD7374DBBDECF12C323A14521801040A72011CDD630E7913C4D5617132F357653D6BCBF0629725C92A49A798976249C732140E031DC00AF0D4FD66A3EF4DB9F9693F1A8F4DB9F9693DF572F9E3173C28A28ACC90A28A2910A28A2910A28A2910A28A2913FFD9
// 6=657325*포인트 변형 도구*28000000480000004800000001002000040000004C0700000000000000000000000000000000000000000000FFD8FFE000104A46494600010200000100010000FFFE00104C61766335382E35322E31303000FFDB0043000806060706070808080808080909090A0A0A090909090A0A0A0A0A0A0C0C0C0A0A0A0A0A0A0A0C0C0C0C0D0E0D0D0D0C0D0E0E0F0F0F1212111115151519191FFFC400A000000202030101000000000000000000000005070402060803010101010101010000000000000000000000000102030510000201030202060506090D0101000000010203000411120531211341512206619114075416D271159317D381B19492D44224325362C1D1A323A2A1952574554484523311000103020406020105010000000000000100021112219103513171814122041361F0A1B162C1423252FFC00011080048004803012200021100031100FFDA000C03010002110311003F00E7FA29B7C35BB91916C0FCD3DB93E812E6BE7C39BAFBB8FAFB7FBDA2D50EFF0093814AA8A6BF0E6EBEEEBF5F6DF7B58FC3FBA7BB7F5B0FDE5583A1529768704B28A65F406E7EEC7EB22F9747D01BA7BB1FAC8BE5D293A1C120E852DA2997D01BA7BB1FAC8BE5D643C3BBA904FAB8E5DB3400FE0064C9FC14A5DA1C120E852BA29C8F0A6F65758B266519C9592038C71CE2438C79D79FC37BBFBA37D645F2E94BB438241D0A9B3C09B35AEF09B88BAD7A6D56D0A08EDED2795DAE5CA69D5710CC48071A40C639D6E90782761B99BA259EE04859A32ADB6EDABA590125189B3C03C88ECC8A4FECAD6E6DA5F1188E222E63B3B62913A907A60929452AD83CDB1D9566DBDA8EED6D1B4579B6DBCB731CB2248448F0E928C54A1558E4EF2E399CF3AC9F655DAE11D4113CC190BA34B29754D7923FB0701BED20833D55A4F08F87930CD713C4FC8E9FA3F6B2467CD6CCAF0F4E7032735757D9F6C7A232DB8347A956509241B52B0127591EABD79C76669AF873C4F7DE27DAF719E0B382DAF2DC98E049247789E5E875C6646D11B04D479E3AA98787BE21905C7D3D16D8AC0C7EAFEA42439186D7D2748CDC0E9D38F3AADF603DCE078083CEEABDD9647635E0F5970239581C56B9F66FB260FEDFC8F33FB3ED583E67F65A3ECDB623FF006D3F24DA7F44ADE2E648ADD4131EB676D2A8AAB966C13D78000009249C002BE5B491DC293D1686562AEAC172AC003C46410410411C41A9EECBF60CAADBEC22A0C9EE8D6173ABE5697F665B2FBC8FC8B6AFD12B50F1E7842DF6486C459A3DCA5D492C723476768B246EA9AE10AF6D6F1BF7C86D4BFACAA6A6BD2BD83D02A30F6BCED13EC3A2E26B5226BB759616656595224E88F77F94719EA04D69C6CA8324493BF1FC289BE8D9024C5A0BC4D31EA4262B81DE0467994C634E49CE3871AA1D0CBD937F7E995FB5DDD3B4B77BB4EEA91384C5DB485C81A8C463562EA19F96641A4FCD49FA41FF00D5C7E70AA0B435B539C1C5A090185C04F40E1B8E4382E99396D7303B31EF613301AD0F11300CD6C20FC429A3D9B35BD86E1BFBA5FAEE91456962C6E620FDED225057FB4392571D67AEA4C1736CD9381ABBC74E91A8E327E6C9EAE750FF00B177170DBFEB58CA98AD94ABE426332723C702A588A6874875167875C65653CCF581DCE1E758616B5A01A8DAC5ADB7E040500CB21FB8BDA1CD888FDC6775EF6D7D6B3E16275D4C33A749078679F2C72156EA85ABD9DB8C036D112C46237C8C81C324039F2ABAACAEA1948607811C0D6819137E623F55CE20DFEE095DC2DC35CAA4D2E175F4907471A80748E6AE4EA60C0139E0194F2ECAC668FBE043AC4F2F21A249117B8065E4C1D255063AB27901576EAD1EE258984BD12A2B83A54173AF4FEE93955E438E0F1AC16C1A39E1912666442D9493BEDDE423BB27EF71C1C36AF222BC5F2BC0F2733CB398DF69654C15D603C34FFAA2E0C324C7F2B3D0D89BEFF4F456A1468E3446769580C176C6A63DA7000A8B3DB52EB4D8C76CB77D59FD48BCC701CEA57A8A7DB4B685D88F2FFF005BBE38FE1C7DB915ED06D200BDAD7249B6A4DCF12AECA25961511F75812572751031D5A5575E58FF00375553E8C797A0FF004D34BC68E38F1A1519F041E96DDF9691AB213BC093CC138E5CA96E57B47A6AAAA45F6257705B0DECCD710C5A96008D2CA90862A5F2017E5CBAF8E3352AC5BA59AC48AFB8D906E79FF558B383C0EAD00B7E102B8A3D7AE718E9580F2C0E3C780AF9EB970719909C7219C72F9B9541659160BB746F7B744C09DC76ECF021F748B03CF05799F45667C47B6E796E1B47F994239FA2B89EDF7ABFB58CC71CAA14B6B21A1824EF600E3246C7801CB38AB0BE27DD953409A1D3FECEC8FF00898334956576A8F116CD819DD36C07AC0BDB7233E4758FC5591F106CC38EE9B70FFD96FF00795C50DE26DD983299A2C32321C5A598CAB711CA01E9E355A3DDEF627322C8BA882B930C0DC8F93464525507885DBFF106CDFF0029B77E596FF79518FB62DC2D6F5365F54B982E4A4B75ABA096394A868E3C6A08CD8CF3C66B9BA6DDEF67896191D0A290C00820539008E6EB1873C89E26AB0B89979ABB29ED5E5F8B14952549524D3CC4BB12491CC850380C75002BC353F9D47DEBB73FC693F3A8F5DB9FE349E9AB571C52578514515951145145111451451114514511145145117FFFD9
// 7=

// `;

// var k = 1;
// while (k < 100){
//   var findtest = reg.test(text)
//   if (findtest == false) {
//     break;
//     };
// var resulttext = (text.replace(reg, changeto));
// text = resulttext;
// k++;
// };


// console.log(reg.test(text));

// fs.writeFile('messageresult.txt', text, (err) => {
//   if (err) throw err;
//   console.log('the file saved')});