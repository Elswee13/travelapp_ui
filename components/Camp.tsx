import { PEOPLE_URL } from "@/constants/index";
import Image from "@/node_modules/next/image";
//  this are the props assigned for the campsite function
interface CampProps {
    backgroundImage:string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}
//  this area is for image and the green circle holding the map logo,title and subtitle
const CampSite =({backgroundImage,title,subtitle,peopleJoined}: CampProps)=>{
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl rounded-5xl`} >
           <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 " >
            <div className="flexCenter gap-4  " >
                <div className="rounded-full bg-green-50 p-4" >
                    <Image
                     src="/folded-map.svg"
                     alt="map"
                     width={28}
                     height={28}
                    />
                </div>
                <div className="flex flex-col gap-1" >
                    <h4 className="bold-18 text-white" > {title} </h4>
                    <p className="regular-14 text-white" > {subtitle} </p>
                </div>
            </div>

            <div className="flexCenter gap-6">
                <span className="flex -space-x-4 overflow-hidden" >
                    {PEOPLE_URL.map((url)=>(
                        <Image 
                        className="inline-block h-10 w-10 rounded-full "
                         src={url}
                         key={url}
                         alt="person"
                         width={52}
                         height={52}
                        />
                    ))}
                </span>
                <p className="bold-16 md:bold-20  text-white" >
                    {peopleJoined}
                </p>
            </div>

           </div>
        </div>
    )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20" >
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[600px]">
            <CampSite
                backgroundImage ="bg-bg-img-1"
                title="Yunque Camp"
                subtitle="El murcielagazo, El Yunque"
                peopleJoined="50+ Joined"
            />
            <CampSite
                backgroundImage="bg-bg-img-2"
                title="Vista desde la montaña"
                subtitle="En algún lugar de Puerto Rico"
                peopleJoined="50+ Joined"
            />
        </div>
        
        <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6" >
            <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl" >
                <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white" >
                  <strong>¿Te sientes perdido</strong> y no sabes el camino?
                </h2>
                <p className="regular-14 xl:regular-16 mt-5 text-white" >
                A partir de la ansiedad de los aventureros al visitar un nuevo lugar de exploracion,aventura,
                 la posibilidad de perderse es muy grande. Por eso estamos aquí para aquellos que quieran iniciar una nueva aventura llena de muchos lugares bonitos para recordar.
                </p>
                <Image
                 src="/quote.svg"
                 alt="camp-2"
                 width={186}
                 height={219}
                 className="camp-quote"
                />
            </div>
        </div>

    </section>
  )
}

export default Camp