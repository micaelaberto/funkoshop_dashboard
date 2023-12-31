import React from 'react'

function Footer() {
    return (
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Dashboard FunkoShop 2023</span>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer)