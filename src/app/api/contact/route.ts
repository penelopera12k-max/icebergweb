import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({ 
      success: true, 
      message: "Mensaje recibido correctamente." 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Error al procesar el mensaje" 
    }, { status: 500 });
  }
}
