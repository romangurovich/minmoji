'use client';
import React, { useState } from "react";
import Image from 'next/image'

type FormData = {
    url: string;
}

export async function getServerSideProps() {
    return { props: {} };
}

export default function Form() {
    const [formData, setFormData] = useState({
        url: ""
    });

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState: FormData) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formUrl = e.target.action;
        alert(formData.url);
    }


    return (
        <div>
            <form
                method="POST"
                action="/"
                className="flex flex-row m-10 w-full"
                onSubmit={submitForm}
            >
                <div>
                    <input
                        onChange={handleInput}
                        className="w-[calc(100vw-10rem)] md:w-[calc(100vw-20rem)] lg:w-[calc(100vw-40rem)] p-2 py-6 lg:text-left"
                        type="text"
                        name="url"
                        placeholder={"Put URL here..."}
                    />
                </div>
                <button type="submit" className="ml-4 group p-2 flex flex-col justify-around group rounded-lg bg-orange-200 transition-colors hover:border-gray-300 hover:bg-orange-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <span className="font-semibold text-green-950 group-hover:text-green-900">shrink it</span>
                    <Image
                        className="group-hover:rotate-12 self-center"
                        src={"./parrot.svg"}
                        alt={"emoji"}
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </form>
        </div>
    )
}