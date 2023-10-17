
const Books = () => {

    const submitHandle = (e) => {
        e.preventDefault()
        console.log("submit")
    }

    return (
        <>
            <div className="container">
                <form onSubmit={submitHandle}>
                    <div className="row mb-5">
                        <h1 className="text-center">Know About Books!</h1>
                        <div className="col-12 mb-5">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light" placeholder="Enter keyword" />
                                <button type="submit" className="btn btn-danger"><i className="fa-brands fa-searchengin text-white fs-1"></i></button>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="book-details row">
                    {/* book thumbnail, auther name, summary */}


                    <div className="col-md-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <img src="https://picsum.photos/500/300" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card bg-light mb-5">
                            <div className="card-body">
                                <h2 className="text-center">Book Title</h2>
                                <p className="text-center">Auther Name</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse optio odit nesciunt possimus commodi assumenda, excepturi alias, doloremque omnis numquam magnam. Repellat facilis laboriosam perferendis minus non! Ratione consequuntur maiores, nisi, quibusdam recusandae natus repellat ducimus ab quaerat hic ipsam ea quis. Molestiae esse quae, aut modi assumenda eveniet nihil atque ipsam laboriosam inventore vitae, non odit ipsum iure culpa eos nam repellendus odio. Rerum similique accusamus nam laborum esse distinctio amet sunt, facere officia hic ea possimus vero quisquam ad accusantium minus, reiciendis qui obcaecati. Exercitationem pariatur, amet sunt eaque praesentium incidunt saepe obcaecati omnis adipisci earum, et perspiciatis? Illum ipsam sit aliquam, vero numquam sequi beatae quasi architecto reprehenderit repellendus nostrum velit labore excepturi, dolorem quam, nobis ad dolores cum corporis! Architecto temporibus error tenetur excepturi velit laboriosam perspiciatis laborum corrupti repellat blanditiis, quod nobis debitis cum accusantium suscipit a et tempora aspernatur. Tempora voluptatem assumenda debitis alias distinctio, aliquam iste, nobis magnam harum cupiditate rerum officiis animi pariatur illo! Eum non quia hic. Iure ea, quaerat eius qui suscipit vel nostrum amet doloribus quibusdam harum error ipsa soluta eveniet sit eum. Necessitatibus officiis, enim possimus temporibus, explicabo nesciunt dolorum, doloremque nemo architecto quas vitae quos impedit voluptates? Alias ea harum facilis sit quas quos inventore. Inventore, iste ut ducimus officiis suscipit aut maiores asperiores dolorum expedita, harum earum voluptas at excepturi perspiciatis blanditiis consequuntur a neque. Omnis debitis quo aliquam eum earum ipsam iure commodi molestias dolor soluta eligendi praesentium, iusto id qui maiores iste nesciunt culpa dicta! Eaque vitae nulla temporibus quod, iure totam mollitia perspiciatis ratione a at eius voluptas aliquam, eveniet libero porro. Excepturi eos voluptatum quidem consequatur voluptas exercitationem laborum saepe minus optio assumenda temporibus similique sint cumque iure inventore cum nesciunt deserunt, soluta impedit error ratione, repellendus illum dignissimos possimus! Cupiditate eos ut dolores at dignissimos expedita eius et? Repellendus molestiae explicabo natus, voluptatem perspiciatis adipisci quae amet alias accusamus quo beatae dolorem nisi velit iste facere dolorum, sint sed mollitia illo commodi impedit quas, quia unde eaque. Laboriosam beatae ullam eaque quisquam nisi ea doloribus facere, laudantium recusandae impedit non quas? Consectetur illo dignissimos, voluptatem obcaecati ab dicta asperiores quibusdam quisquam aliquam at autem perferendis ullam cumque doloremque. Accusantium, repellendus! Vel adipisci officiis rem corporis consectetur atque nulla nihil dicta aliquam optio accusantium reiciendis earum, iure pariatur. Ut voluptas culpa ducimus harum aspernatur nisi possimus vel, dolor dolorum placeat perspiciatis rem porro sequi deleniti cupiditate, ea incidunt tempora. Ratione iste nemo magnam sequi cupiditate atque fuga cum tenetur! Magnam, fuga est? Nihil repellendus a aperiam! Porro sapiente animi, iste qui, modi assumenda tempore quaerat corporis quae deserunt nemo impedit iure! Beatae voluptatum veniam voluptas debitis mollitia esse minima iusto ducimus ad iste cupiditate cum perferendis, quod quibusdam deserunt. Itaque recusandae rerum velit vero laborum quisquam voluptas soluta corrupti sint ex, architecto ut minima quibusdam tenetur quo deleniti eveniet neque, eligendi sunt natus quas assumenda delectus. Aliquam similique quam consequatur voluptatem alias deleniti officiis at, animi corporis id dolore fugiat, corrupti laborum nesciunt voluptas aut cupiditate nam accusantium inventore suscipit fugit itaque. Qui nam modi perspiciatis nisi, nihil sed officiis doloremque ipsam? Aliquam aut vel delectus fugiat ex eius reiciendis, neque debitis perferendis magnam exercitationem eos alias quibusdam temporibus asperiores? Ut architecto aliquam blanditiis maxime saepe quae modi voluptate dicta quibusdam officiis nihil, illo, vero accusantium ex repellat odit vel reprehenderit placeat eos. Dolore, error fugit. Praesentium minima nostrum optio fugiat iusto. Totam voluptatibus rerum aliquam corporis ullam assumenda odio nam impedit laudantium reiciendis, dolorum tenetur dicta, pariatur sint at quo nisi illo repellendus, perspiciatis in? A autem ex, odit quam optio doloribus laudantium. Possimus nemo laborum, praesentium optio placeat, ducimus deserunt, cupiditate fugiat facilis corrupti odio odit harum alias facere tempore reprehenderit quo doloribus! Earum illum explicabo perspiciatis eaque blanditiis quos consectetur nesciunt nostrum neque laborum unde eius laudantium voluptas accusantium maxime porro mollitia consequatur expedita, vero error velit possimus. Exercitationem voluptate voluptas maxime maiores atque obcaecati veniam, unde doloribus odit eum repellendus fugit necessitatibus omnis ea aperiam natus quam facilis voluptates odio sit nisi id impedit corrupti ex. Voluptatem accusamus corrupti et impedit hic voluptatum libero adipisci ex, quo omnis, iure rem, natus obcaecati asperiores voluptatibus. Voluptates omnis quod, nam, rerum a aliquam debitis labore praesentium minus veniam cupiditate fuga quibusdam nesciunt ut sequi vel, voluptatem deleniti repellendus commodi consequatur magni eligendi sit nihil quia. Sunt veritatis quibusdam autem ipsa eveniet tenetur nam nesciunt nisi modi adipisci aut maiores voluptates ex, reprehenderit ad cumque soluta reiciendis nemo quis laboriosam nobis. Asperiores dolorem aspernatur facilis necessitatibus dignissimos iusto eos cum itaque reprehenderit quos rerum modi magnam praesentium, quisquam impedit nobis labore deleniti soluta ab saepe a tempore consequatur. Ab tenetur consequuntur ut aspernatur tempore totam molestias amet quibusdam necessitatibus, enim alias quos repudiandae minima harum porro nam quia saepe error praesentium blanditiis ratione explicabo inventore. Ullam, voluptatum vero reiciendis autem aliquam optio vitae, a illum aliquid quae ipsam laboriosam ducimus nobis laudantium magni minus veniam quibusdam odio sint modi impedit maxime neque! Aspernatur soluta alias natus voluptatem impedit? Sed delectus explicabo ducimus accusantium esse non nihil in aliquid repellat voluptates ut modi doloribus, aliquam magnam corporis expedita nostrum! Omnis incidunt recusandae maiores eum itaque pariatur porro aut harum laudantium? Porro laudantium ad magnam. Fugit architecto vitae minus nesciunt incidunt odio maiores consectetur ipsam dolor iure minima corrupti reiciendis, ea animi dolore excepturi pariatur! Doloremque magnam, veritatis eaque a, nulla error, quo aliquid laboriosam ab itaque repellat. Repellendus dolore quo numquam ipsa excepturi illo repellat. Inventore repellendus totam labore, architecto officiis quod ratione facilis vero quasi odio sapiente quibusdam debitis deleniti expedita veritatis dolor perspiciatis corporis explicabo? Facilis tempora reprehenderit quod natus, error animi ducimus, odio illo possimus sapiente impedit perspiciatis unde porro itaque officiis ex eaque dolor voluptate ratione blanditiis quasi cum dolorum in numquam. Voluptates adipisci saepe, non explicabo beatae consequuntur illo nostrum laboriosam delectus cupiditate esse tenetur nobis amet eius. Autem odit beatae earum eius debitis minima numquam voluptatem ipsam! Similique, esse. Tempora, placeat. Sapiente repellat recusandae iusto?</p>
                                <form>
                                    <button className="btn btn-primary">
                                        <i className="fa fa-store"></i> Add to cart
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books