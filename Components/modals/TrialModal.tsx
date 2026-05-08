"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";

interface TrialModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [location, setLocation] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    if (!isOpen) return null;

    const validateForm = () => {
        if (!name.trim()) {
            toast.error("Name is required");
            return false;
        }
        if (!email.trim() || !email.includes("@")) {
            toast.error("Valid email is required");
            return false;
        }
        if (!telephone.trim()) {
            toast.error("Telephone is required");
            return false;
        }
        if (!location.trim()) {
            toast.error("City is required");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            const res = await fetch(`/api/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    telephone, 
                    location, 
                    source: "Trial Modal Form" 
                }),
            });

            if (res.ok) {
                toast.success("Message sent successfully! 🎉");
                setName("");
                setEmail("");
                setTelephone("");
                setLocation("");
                onClose();
                router.push("/thank-you");
            } else {
                toast.error("Something went wrong. Try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Server error. Try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <FiX size={24} />
                </button>

                <div className="p-8 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <input
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-full px-6 py-4 bg-white border border-gray-100 text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8c5a31] shadow-sm"
                            placeholder="Name"
                        />

                        {/* Email */}
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-full px-6 py-4 bg-white border border-gray-100 text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8c5a31] shadow-sm"
                            placeholder="Email"
                        />

                        {/* Telephone */}
                        <input
                            required
                            type="tel"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            className="w-full rounded-full px-6 py-4 bg-white border border-gray-100 text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8c5a31] shadow-sm"
                            placeholder="Telephone"
                        />

                        {/* City */}
                        <input
                            required
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full rounded-full px-6 py-4 bg-white border border-gray-100 text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8c5a31] shadow-sm"
                            placeholder="City"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-6 py-4 rounded-full bg-[#8c5a31] text-white font-bold text-lg hover:brightness-110 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TrialModal;
