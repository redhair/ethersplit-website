import React, { useState } from "react"
import PropTypes from "prop-types"

QtyPicker.propTypes = {
  onQtyChange: PropTypes.func.isRequired,
  max: PropTypes.number,
}

function QtyPicker({ onQtyChange, max }) {
  const [qty, setQty] = useState(0)

  return (
    <div className="border border-gray-600 p-2 rounded-lg m-4">
      <button
        disabled={qty <= 0}
        onClick={() => {
          if (qty > 0) {
            setQty(qty - 1)
            onQtyChange(qty - 1)
          }
        }}
        className="bg-gray-500 py-2 px-4 rounded-lg text-white font-bold disabled:opacity-50"
      >
        -
      </button>
      <span className="text-white font-bold text-xl mx-4">{qty}</span>
      <button
        disabled={qty === max}
        onClick={() => {
          if (qty >= max) return
          setQty(qty + 1)
          onQtyChange(qty + 1)
        }}
        className="bg-blue-400 py-2 px-4 rounded-lg text-white font-bold disabled:opacity-50"
      >
        +
      </button>
    </div>
  )
}

export default QtyPicker
