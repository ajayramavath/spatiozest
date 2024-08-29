import Image from 'next/image';
import { cn } from '@/lib/utils';
import LinkButton from './linkButton';

interface solutionItem {
    id: number,
    label: string,
    image: string,
    title: string,
    description: string,
    viewMore: string
}

const SolutionsCard = ({items , selectedId ,selectedItem,setSelectedId,setSelectedItem}:
    {items:solutionItem[]; selectedId:number; selectedItem: solutionItem;
        setSelectedItem: any; setSelectedId: any }) => {
  return (
          <div className="bg-gray-50 isolate min-h-[490px] flex gap-10 items-center justify-center w-full dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-3xl border">
          <div className="bg-gradient-to-r from-indigo-500 to-[#a855f7]
              min-h-[490px] py-5 w-[30%] rounded-3xl flex flex-col justify-center items-start "> 
                  {
                      items.map((item, index) => {
                          return (
                              <div key={index} className="flex items-center gap-8">
                                  <div className={cn("w-[7px] h-[66px] mx-5 bg-gray-500",
                                      selectedId === item.id ? "bg-gray-200 rounded-full" : "",
                                      index === 0 ? "rounded-t-full":"",
                                      index === 5 ? "rounded-b-full":"",
                                      //index !== 0 && index !== 5 ? "rounded-full":""
                                      )} />
                                  <div
                                      className={cn("cursor-pointer text-left rounded-lg", selectedId === item.id ? "bg-gray-200 text-black cursor-default" : "")}
                                      onClick={() => {
                                          if (selectedId != item.id) {
                                              setSelectedId(item.id);
                                              setSelectedItem(item);
                                          }
                                      }}
                                  >
                                      <div className="font-bold w-60 px-5 py-5">{item.label}</div>
                                  </div>
                              </div>
                          );
                      })
                  }
              </div>
              <div className='w-[35%]'>
                    <div className='flex flex-col items-start justify-start'>
                  <div className="font-bold text-2xl mb-10 mt-5 text-md max-w-sm dark:text-normal-300">
                                {selectedItem?.title}  
                            </div>
                            <div className='text-lg mb-5'>
                                {selectedItem.description}
                            </div>
                            <LinkButton title="View More" link={selectedItem.viewMore} />
                    </div>
              </div>
              <div className='w-[35%]'>
                  <div className="mt-4 mx-auto">
                      <Image
                          src={selectedItem.image}
                          height={420}
                          width={365}
                          className="object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                      />
                  </div>
              </div>
            </div>
    );
}

export default SolutionsCard