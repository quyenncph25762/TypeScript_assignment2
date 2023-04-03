const AdminUpdate = () => {
    return <div className="grow p-5 bg-[#F1F3F4] flex">
        <div className="w-[40%]">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Cập nhật sản phẩm</h1>
            <div
                className="group flex flex-col justify-between rounded-lg bg-transparent p-4 shadow-md transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-[400px] mt-10 min-h-[350px]"
            >
                <div className="flex flex-col justify-center items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/f273/cf6b/2d449af14782fa50ceb1386191b20b5b?Expires=1681689600&Signature=XTWV1VoMJb9QCnLnqVePNQZiprO9AJheJFvyrvsVFWJat0zdr8oQVbFEt6-KpTrp3JN0tiUKkZLYRZ39etN6Nt3IgG~4P~Cuy5XB9YrarHDBOWHf4u36BCdmLRHrTfGDXrP7V5fiqZaE7IOmaKvsUoG9wXRd~UN2qqI3LDdnSNpkg-a6SkFNO~YZNYidO~aShdAuCFn-acauuGeGSAVsaEANzrtA~ssdxFbYjrXuYV8mPhIrt5EHQ2ktkh6tHolj~J7iHGnr6Zl4D9Jimrgten9-Y0JMLuVb4eUswgJkeH4Xe7kxtdq7TfjTo72RF-X1cB8Pxv4LvXItc9Cke54ECw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="w-[250px] object-cover" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-14 text-[#00B0D7] mt-8 cursor-pointer" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="32" d="M256 176v160M336 256H176" /></svg>
                    <h1 className="text-2xl text-[#5F5E61] font-semibold text-center mt-3">Sửa ảnh</h1>
                </div>
                <div className="mt-4 border-t-2 border-gray-300 pt-4">
                    <textarea
                        className="w-full rounded-lg text-sm font-medium text-gray-500 border-1 p-3 bg-transparent"
                        placeholder="Mô tả ngắn:"
                        cols={30}
                        rows={4}
                    ></textarea>
                </div>
            </div>
        </div>
        <div className="w-[60%]">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-transparent p-8 shadow-md lg:col-span-3 lg:p-12 w-[650px]">
                            <h1 className="text-2xl text-[#5F5E61] font-semibold mb-8">Thông tin sản phẩm</h1>
                            <form action="" className="space-y-4">
                                <div>
                                    <label className="sr-only">Tên sản phẩm</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Tên sản phẩm"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only">Giá gốc</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                            placeholder="Giá gốc"
                                            type="number"
                                            min={0}
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only">Giá khuyến mãi</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                            placeholder="Giá khuyến mãi"
                                            type="number"
                                            min={0}
                                        />
                                    </div>
                                </div>
                                <select name="" id="" className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent">
                                    <option value="">
                                        latop
                                    </option>
                                </select>
                                <div>
                                    <label className="sr-only">Điểm nổi bật</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Điểm nổi bật"
                                        cols={30}
                                        rows={4}
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="sr-only">Mô tả</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Mô tả"
                                        cols={30}
                                        rows={4}
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-[#00B0D7] px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Thêm mới
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
}

export default AdminUpdate
