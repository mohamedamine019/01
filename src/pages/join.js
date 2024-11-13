import React, { useState } from 'react';
import { db } from './firebase'; // تأكد من إعداد Firebase بشكل صحيح
import { collection, addDoc } from 'firebase/firestore';
import './join.css'; // تأكد من ربط ملف CSS

const Join = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        university: '',
        specialty: '',
        level: '',
        matriculationNumber: '',
        socialMedia: '',
        experience: '',
        file: null,
    });

    const [popupActive, setPopupActive] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [errors, setErrors] = useState({});

    // تحديث بيانات النموذج
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // تحديث الملف المرفق
    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            file: e.target.files[0],
        }));
    };

    // التحقق من المدخلات وإرسال النموذج
    const handleSubmit = async (e) => {
        e.preventDefault();
        let errorFields = {};

        // تحقق من الحقول المطلوبة
        if (!formData.firstName) errorFields.firstName = "الاسم الأول مطلوب!";
        if (!formData.lastName) errorFields.lastName = "الاسم الأخير مطلوب!";
        if (!formData.dob) errorFields.dob = "تاريخ الميلاد مطلوب!";
        if (!formData.email) errorFields.email = "البريد الإلكتروني مطلوب!";
        if (!formData.phone) errorFields.phone = "رقم الهاتف مطلوب!";
        if (!formData.university) errorFields.university = "الجامعة مطلوبة!";
        if (!formData.specialty) errorFields.specialty = "التخصص مطلوب!";
        if (!formData.level) errorFields.level = "المستوى الأكاديمي مطلوب!";
        if (!formData.matriculationNumber) errorFields.matriculationNumber = "رقم التسجيل مطلوب!";

        if (Object.keys(errorFields).length > 0) {
            setErrors(errorFields);
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "members"), formData);
            console.log("Document written with ID: ", docRef.id);
            setPopupMessage('تم إرسال طلبك بنجاح!');
            setPopupActive(true);
            setFormData({  // إعادة تعيين النموذج
                firstName: '',
                lastName: '',
                dob: '',
                email: '',
                phone: '',
                university: '',
                specialty: '',
                level: '',
                matriculationNumber: '',
                socialMedia: '',
                experience: '',
                file: null,
            });
            setErrors({});
        } catch (error) {
            console.error("Error adding document: ", error);
            setPopupMessage('حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.');
            setPopupActive(true);
        }
    };

    // إغلاق الرسالة المنبثقة
    const closePopup = () => {
        setPopupActive(false);
    };

    return (
        <div className="join-form">
            <h2>انضم إلى نادي فارفي</h2>
            <form onSubmit={handleSubmit}>
                <div className="section">
                    <h3 className="personal">المعلومات الشخصية</h3>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="الاسم الأول"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="الاسم الأخير"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="date-input"
                    />
                    {errors.dob && <div className="error-message">{errors.dob}</div>}
                    <input
                        type="email"
                        name="email"
                        placeholder="البريد الإلكتروني"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="رقم الهاتف"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>

                <div className="section">
                    <h3 className="information">المعلومات الأكاديمية</h3>
                    <input
                        type="text"
                        name="university"
                        placeholder="الجامعة"
                        value={formData.university}
                        onChange={handleChange}
                    />
                    {errors.university && <div className="error-message">{errors.university}</div>}
                    <input
                        type="text"
                        name="specialty"
                        placeholder="التخصص"
                        value={formData.specialty}
                        onChange={handleChange}
                    />
                    {errors.specialty && <div className="error-message">{errors.specialty}</div>}
                    <input
                        type="text"
                        name="level"
                        placeholder="المستوى الأكاديمي"
                        value={formData.level}
                        onChange={handleChange}
                    />
                    {errors.level && <div className="error-message">{errors.level}</div>}
                    <input
                        type="text"
                        name="matriculationNumber"
                        placeholder="رقم التسجيل"
                        value={formData.matriculationNumber}
                        onChange={handleChange}
                    />
                    {errors.matriculationNumber && <div className="error-message">{errors.matriculationNumber}</div>}
                </div>

                <div className="section">
                    <h3 className="social">وسائل التواصل الاجتماعي</h3>
                    <input
                        type="text"
                        name="socialMedia"
                        placeholder="أضف حسابات التواصل الاجتماعي الخاصة بك"
                        value={formData.socialMedia}
                        onChange={handleChange}
                    />
                </div>

                <div className="section">
                    <h3 className="experience">الخبرة</h3>
                    <textarea
                        name="experience"
                        placeholder="حدثنا عن خبراتك السابقة"
                        value={formData.experience}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">إرسال</button>
            </form>

            {/* رسالة منبثقة */}
            <div className={`popup-message ${popupActive ? 'active' : ''}`}>
                <div className="popup-message-content">
                    <h3>{popupMessage}</h3>
                    <button className="close-btn" onClick={closePopup}>إغلاق</button>
                </div>
            </div>
        </div>
    );
};

export default Join;
