import "./NEWSupdateStyles.css";

import News1 from "./Assets/NewsT1.jpg";
import News2 from "./Assets/NewsT2.jpg";
import News3 from "./Assets/NewsT3.jpg";
import News4 from "./Assets/NewsT4.png";
import News5 from "./Assets/NewsT5.jpg";
import News6 from "./Assets/NewsT6.jpg";
import News7 from "./Assets/N1.jpg";
import News8 from "./Assets/N2.jpg";
import News9 from "./Assets/N3.jpg";
import News10 from "./Assets/N4.jpg";
import NewsData from "./NewsData";
import NewsRecentData from "./NewsRecentData";

const NEWSupdate = () => {
  return (
    <div className="news">
      <h1>News Updates</h1>

      <NewsData
        className="first-new"
        heading="Todays News"
        Date="03/10/2013"
        text="In the afternoon session Mr Firew Tadesse is presenting on case based surveillance and data management in primary health care unit."
        img1={News1}
        img2={News2}
      />

      <NewsData
        className="first-new-reverse"
        heading="News"
        Date="15/11/2013"
        text="በፈተናዎች የማይበገር የመጀመሪያ ደረጃ የጤና ክብካቤ ስርአት ግንባታ በሚል መሪ ቃል በአዲሰ አበባ እየተካሄደ ባለው የኢትዮጵያ ህብረተሰብ ጤና አጠባበቅ መኮንኖች ማህበር  ዓመታዊ ጉባዔው ላይ የተገኙት የጤና ሚኒስቴር ሚኒስትር ዶ/ር ሊያ ታደሰ ባደረጉት ንግግር በጤናው ዘርፍ የተያዙትን ግቦች ለማሳካት የሙያ ማህበራት፣ የጥናት እና የትምርት ተቋማት፣ የአጋር ድርጅቶች እና የሁሉም ባለድርሻ አካላት ሚና እጅግ የላቀ ነው ብለዋል፡፡
          በጤናው ስርአት ግንባታ እና በግጭት፣ በጎርፍ፣ እንዲሁም በተለያዩ የማህበረሰብ ጤና አደጋዎችን ለመከላከል በተደረገው ጥረት ውስጥ የማህበሩ እና የህብረተሰብ ጤና አጠባበቅ መኮንኖች ሚና ጉልህ እንደ ነበርም ተናግረው ላደረጉት አስተዋፅኦም አመስግነዋል፡፡
          በተለያዩ ተፈጥሮ እና ሰው ሰራሽ አደጋዎች የተጎዳውን ማህበረሰብ እና ጤና ስርአት መልሶ ለማቋቋም ትልቅ ትኩረት ተሰጥቶ እየተሰራ መሆኑን የገለጹት ዶ/ር ሊያ የሙያ ማህበራቱም ሂደቱን ለማገዝ የበኩላቸውን ሚና እንዲወጡ ጥሪ ያቀረቡ ሲሆን ጤና ሚኒስቴር ከማህበሩ ጋር የሚሰራርርን ስራዎች አጠናክሮ የሚቀጥል መሆኑንም ገልጸዋል፡፡
          የማህበሩ ፕሬዝዳንት ዶ/ር ሰርካም ግርማ በበኩላቸው ማህበሩ ለህብረተሰቡ የሚመጥን የጤና አገልግሎት መስጠት እንዲቻል የሚያግዝ ፍኖተካርታ ቀርፆ እየሰራ መሆኑን ገልፀው እንደ ሀገር በጤናው ሴክተር የተያዙትን ግቦች ለማሳካት ማህበራቸው የበኩሉን ሚና ለማበርከት በትኩረት እንደሚሰራ ገለጸው በፍኖተ ካርታው ትግበራም የጤና ሚኒስቴር ድጋፍ እንዲጠናከር ጠይቀዋል፡፡
          በመድረኩ ላይ  በጤና መኮንንነት ለረጅም ጊዜ ላገለገሉ  እና በሞያውና በምርምር የላቀ ውጤት ላስመዘገቡ የማህበሩ አባላት የአውቅና ሽልማቶች የተበረከቱ ሲሆን የተለያዩ ጥናታዊ ፅሁፎችም ቀርበዋል፡፡
          "
        img1={News5}
        img2={News6}
      />

      <NewsData
        className="first-new"
        heading="News"
        Date="08/08/2014"
        text="የኢትዮጲያ ህብረተሰብ ጤና መኮንኖች ማህበር
        የኢትዮጵያ ህብረተሰብ ጤና መኮንኖች ማህበር ከWCEA(world continuing education alliance) ጋር በመተባበር አዲሱን የተከታታይ ሙያ ማጎልበቻ መተግበሪያ ለአባላቶቹ ሲያበስር በደስታ ነው። ይህ መተግበሪያ አባላቶቻችን በነጻ የተከታታይ ሙያ ማጎልበቻ ስልጠና እና ሰርተፍኬት በበይነ መረብ እንዲሁም በሞባይል መተግበሪያ እንዲያገኙ ይረዳል።
        እንዲሁም ይህ መተግበሪያ አባላቶቻችን ነጻ የተከታታይ ስልጠናን እና ሰርተፍኬትን በቀጥታ በOnline እንዲሁም በOffline ማግኘት ይችላሉ ፣ የተለያዩ ጥናታዊ ጽሁፎችን ማግኘት ይችላሉ እንዲሁም ሳምንታዊ webinar መሳተፍ እንዲችሉ ይረዳል።…"
        img1={News7}
        img2={News8}
      />
      <NewsData
        className="first-new-reverse"
        heading="CPD Center Managment Training"
        text="CPD Center managment training pressentation"
        img1={News9}
        img2={News10}
      />
    </div>
  );
};

export default NEWSupdate;
