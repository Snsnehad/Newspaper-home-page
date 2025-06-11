import { FaArrowRight } from 'react-icons/fa';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';

const newsItems = [
  {
    id: 1,
    time: '3 mins ago',
    image: '/temple.jpeg',
    headline: 'महापर्व की मंगल समिति में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह',
  },
  {
    id: 2,
    time: '5 mins ago',
    image: '/temple.jpeg',
    headline: 'महापर्व की मंगल समिति में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह',
  },
  {
    id: 3,
    time: '10 mins ago',
    image: '/temple.jpeg',
    headline: 'महापर्व की मंगल समिति में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह',
  },
  {
    id: 4,
    time: '10 mins ago',
    image: '/temple.jpeg',
    headline: 'महापर्व की मंगल समिति में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह',
  },{
    id: 5,
    time: '10 mins ago',
    image: '/temple.jpeg',
    headline: 'महापर्व की मंगल समिति में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह',
  },{
    id: 6,
    time: '10 mins ago',
    image: '/temple.jpeg',
    headline: 'महापर्व की मंगल समिति में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह',
  },
];

const NewsSection = () => {

  return (
    <div className="bg-white py-6 px-4">
      <div className="flex items-center gap-2 mb-4">
        <img src="/lotusicon.png" alt="Lotus" className="h-6 w-8" />
        <h2 className="text-black font-semibold text-xl">News</h2>
      </div>

      <HorizontalScrollCarousel
        items={newsItems}
        renderItem={(item) => (
          <div
            key={item.id}
            className="relative min-w-[250px] max-w-[250px] h-[300px] rounded-2xl overflow-hidden shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute top-3 right-3 bg-white text-red-600 text-xs font-semibold px-2 py-1 rounded-full shadow">
              {item.time}
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-sm z-10">
              {item.headline}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        )}
        viewAllCard={
          <div
            className="relative min-w-[250px] max-w-[250px] h-[300px] rounded-2xl overflow-hidden shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/temple.jpeg)` }}
          >
            <div className="absolute inset-0 bg-black/60 rounded-2xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <p className="text-lg font-semibold mb-3">View All</p>
              <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow">
                <FaArrowRight />
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default NewsSection;
