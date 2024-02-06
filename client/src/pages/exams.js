import React, { useState, useEffect } from "react";

const Exams_Page = () => {

    const [exams, setExams] = useState([]);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
                const res = await response.json();
                const exams_data = res["exams"]
                setExams(exams_data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchExams();
    }, []);

    return (
        <>
            <div>
                <h2>Patient Exams</h2>
            </div>
            <div>
                <h1>List All Exams</h1>
                {exams.map(exam => (
                    exam && (
                        <div key={exam.patientId}>
                            {exam.age}
                        </div>
                    )
                ))}
            </div>
        </>
    );
}

export default Exams_Page;
