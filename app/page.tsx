"use client";

export default function Home() {
  function tesjs() {
    alert("Halo dunia!")
    document.getElementById("rendi").innerHTML += "<h1>Succes</h1>";
  }

  return (
    <>
      <header
        style={{
          background: "linear-gradient(120deg, #3498db, #3480db, #3470db)",
          padding: "20px",
          color: "#fff",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          marginBottom: "30px"
        }}
        className="text-center"
      >
        Rendi Marzikri
      </header>
      <div 
        style={{ 
          margin: "10px" 
        }}
      >
        <button 
          onClick={tesjs} 
          style={{
            background: "blue",
            color: "#fff",
            padding: "20px",
            cursor: "pointer",
            borderRadius: "20px",
          }}
        >
          Tes JS
        </button>
        <div id="rendi"></div>
      </div>
    </>
  );
}
