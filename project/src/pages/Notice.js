import React from 'react';

export default function Notice() {
    return (
        <div className='flex flex-col w-full text-lg text-left'>
            <div className='flex items-center w-full py-5 pl-10'>
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>Bestie 개인정보 이용 내역 안내</li>
                </ul>
            </div>
            <p className='px-10 mb-5'>
                안녕하세요, Bestie를 이용해 주셔서 감사합니다. 개인정보 보호는 우리의 최우선 과제입니다. 이번 안내는 여러분의 개인정보가 어떻게 사용되고 있는지에 대한 내용을 포함하고 있습니다. 저희는 여러분의 개인정보를 안전하게 보호하며, 법적 요구사항에 따라 이를 사용하고 있습니다. 더 자세한 내용은 개인정보 이용 내역 페이지에서 확인하실 수 있습니다.
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div className='flex items-center w-full py-5 pl-10'>
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>Bestie 서비스 이용 약관 안내
                    </li>
                </ul>
            </div>
            <p className='px-10 mb-5'>
                안녕하세요, Bestie를 이용해 주셔서 감사합니다. 서비스 이용 약관을 업데이트하였습니다. 이 약관은 여러분의 서비스 이용과 관련된 중요한 정보를 담고 있으며, 반드시 숙지하시기 바랍니다.
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div className='flex items-center w-full py-5 pl-10'>
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>Bestie 개인정보 처리방침 안내
                    </li>
                </ul>
            </div>
            <p className='px-10 mb-5'>
                개인정보 처리방침을 안내해 드립니다. Bestie는 여러분의 개인정보를 보호하고 존중합니다. 이 처리방침은 어떻게 개인정보가 수집, 사용, 보관되는지에 대한 정보를 제공합니다. 더 자세한 내용은 개인정보 처리방침 페이지에서 확인하실 수 있습니다.
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div className='flex items-center w-full py-5 pl-10'>
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>Bestie 최근 업데이트 사항 안내</li>
                </ul>
            </div>
            <p className='px-10 mb-5'>
                최근 업데이트 사항을 안내해 드립니다. Bestie는 항상 서비스를 개선하고 업그레이드하기 위해 노력하고 있습니다. 이번 업데이트로 인해 사용자 경험이 더욱 향상될 것입니다.
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div id='placeholder' className='h-20 mb-4'></div>
        </div>
    );
}