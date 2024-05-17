import { Disclosure } from "@headlessui/react"
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const FaqSection = () => {
    return (
        <section className="faq_section">
            <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="faq_content py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <div className="faq_top flex flex-col gap-2">
                        <span className="text-3xl lg:text-4xl 3xl:text-5xl text-[#17181C] font-semibold">Frequently Asked</span>
                        <span className="text-3xl lg:text-4xl 3xl:text-5xl font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">Questions</span>
                    </div>

                    <div className="faq_btm h-full">
                        <AccordionContent
                            heading={'How much does it cost to hire a Cloud Architect at Talfoundry?'}
                            content={'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'}
                        />
                        <AccordionContent
                            heading={'How does the risk-free trial period with a Cloud Architect work?'}
                            content={'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'}
                        />
                        <AccordionContent
                            heading={'How does the risk-free trial period with a Cloud Architect work?'}
                            content={'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'}
                        />
                        <AccordionContent
                            heading={'How does the vetting process work?'}
                            content={'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection

function AccordionContent(props) {
    let { heading, content } = props
    const [active, setActive] = useState(false)
    return <Disclosure as="div" className={`accordion_item overflow-hidden flex flex-col border-t border-[#00000080] cursor-pointer transition-all duration-300 ease-in-out ${active ? 'bg-[#ECEEFD]' : ''}`}>
        {({ open }) => (
            <>
                <Disclosure.Button className="grid grid-flow-col items-center justify-between p-4"
                onClick={() => setActive(!open)}
                >
                    <span className={`accordion_heading font-medium text-[#17181C] lg:text-xl transition-all duration-300 ${active ? 'text-[#4361EE]' : ''}`}>{heading}</span>
                    {
                        open ? <MinusCircleIcon className='h-8 w-8 text-white' fill="#4460ed" /> : <PlusCircleIcon className='h-7 w-7 text-[#4460ed]' />
                    }

                </Disclosure.Button>
                <Disclosure.Panel className="accordion_content transition-all duration-300">
                    <p className="lg:max-w-[70%] text-[#3E4048] text-sm lg:text-base px-4 pb-4">
                        {content}
                    </p>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
}