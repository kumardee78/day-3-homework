function Hero(){
    return(
        <>  <section>
                <img src="1600w-g5KwHAD2xow.webp" alt="" className="py-6"/>
            </section>
        </>
    )
}
function Quary(){
    return(
        <>
            <section className="py-6 bg-pink-600 text-[white] text-center">
                <h1 className="text-5xl font-medium pb-6 pt-4">Think Health. Think Massage.</h1>
                <p className="text-xl w-[70%] mx-auto font-semibold">We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, Please calll us at 987-654-3210 today!</p>
                <div className="py-8 mt-10">
                    <a href="" className="border-2 px-6 py-4 mr-6 font-semibold text-xl">LEARN MORE ABOUT US</a>
                    <a href="" className="border-2 px-8 py-4 mr-6 font-semibold text-xl">CONTACT US TODAY</a>
                </div>
                
            </section>
        </>
    )
}
function Text(){
    return(
        <>
        <section className="py-16 text-2xl px-12 font-medium">
            <p className="pb-8">Are you looking for a professional, registered Massage therapist? Sample MAssage Therapy has 4 registered massage therapists who can provide clinical massage</p>
            
            <p className="pb-8">We are committed to you long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatment.</p>
            <p className="pb-16">We welcome you to come explore all the benefits you will enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland</p>
            <hr className="border border-black"/>
        </section>  
        </>
    )
}
export default function Body(){
    return(
        <>
            <Hero />
            <Quary />
            <Text />
        </>
    )
}