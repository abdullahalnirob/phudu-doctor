import {  toast } from 'react-toastify';
const getDoctor = () => {
    const storeDoctor = localStorage.getItem("doctor");
    if (storeDoctor) {
        return JSON.parse(storeDoctor);
    } else {
        return [];
    }
};

const addDoctor = (id) => {
    const storeDoctorData = getDoctor();
    const DocId = String(id)
    if (storeDoctorData.includes(DocId)) {
        toast.error("Already Doctor added!")
    } else {
        const idS = String(id);
        storeDoctorData.push(idS);
        // storeDoctorData.push(id);
        localStorage.setItem("doctor", JSON.stringify(storeDoctorData));
        toast.success("Doctor added! Succesfull!");
    }
};

const removeItem = (id) => {
    const storedDoctors = getDoctor();
    const updatedDoctors = storedDoctors.filter((docId) => docId !== id);
    localStorage.setItem("doctor", JSON.stringify(updatedDoctors));
};

export { addDoctor, getDoctor, removeItem };
