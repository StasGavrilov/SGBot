import Image from 'next/image'

export default function UserAvatar() {
    return (
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white shadow">
            <Image
                src="/avatar.jpg"
                alt="Avatar"
                width={40}
                height={40}
                className="object-cover w-full h-full"
            />
        </div>
    )
}
