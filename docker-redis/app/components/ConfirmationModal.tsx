'use client';

interface ConfirmationModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isDangerous?: boolean;
}

export default function ConfirmationModal({
    isOpen,
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    isDangerous = false,
}: ConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-4">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors font-medium cursor-pointer"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 text-white rounded-md transition-colors font-medium cursor-pointer ${
                            isDangerous
                                ? 'bg-red-600 hover:bg-red-700'
                                : 'bg-black hover:bg-black/70'
                        }`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}