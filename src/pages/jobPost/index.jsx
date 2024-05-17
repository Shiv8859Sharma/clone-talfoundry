import { Tab } from "@headlessui/react"
import PageHeadeing from "../../components/pageHeading"
import { useState } from 'react'

const JobPost = () => {

    return (
        <main className="lex flex-col gap-6">
            <PageHeadeing
                title='Post a Job'
            />
            <section className="py-6">
                <div
                    className="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto"
                >
                    <div className="content w-full flex flex-col lg:flex-row gap-5">
                        <div className="left_content lg:w-2/5">

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default JobPost
