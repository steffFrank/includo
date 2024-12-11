import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
    return (
        <div>
            <section className="w-full text-center">
                <div className="flex-center container  mb-32 mt-12 flex-col gap-10">
                    <h1 className="primary-text-gradient m-auto text-center text-2xl font-bold md:text-6xl">
                        Formazione Professionale Con
                        <br />
                        IncluDO .
                    </h1>
                    <p className="text-xl md:text-2xl">
                        Formazione professionale per migranti e comunità locali.
                        <br />
                        Insieme possiamo preservare i mestieri artigianali.
                    </p>
                    <div className="">
                        <Link href="/corsi">
                            <Button className="btn-secondary text-lg text-light-700">
                                Scopri i nostri corsi
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="primary-text-gradient mb-8 text-center text-3xl font-semibold">
                        Perché scegliere IncluDO?
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Formazione professionale</CardTitle>

                                <CardContent>
                                    Impara dai migliori artigiani e acquisisci
                                    competenze uniche.
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Formazione professionale</CardTitle>

                                <CardContent>
                                    Impara dai migliori artigiani e acquisisci
                                    competenze uniche.
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Formazione professionale</CardTitle>

                                <CardContent>
                                    Impara dai migliori artigiani e acquisisci
                                    competenze uniche.
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            <section className=" py-12">
                <div className="container mx-auto">
                    <h2 className="mb-8 text-center text-3xl font-semibold">
                        Cosa dicono di noi
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className=" rounded-lg bg-white p-6 shadow-md">
                            <p className="mb-4 text-gray-600">
                                “IncluDO mi ha aiutato a scoprire una nuova
                                carriera e a migliorare la mia vita.”
                            </p>
                            <h4 className="text-lg font-semibold">
                                Mario Rossi
                            </h4>
                        </div>
                        <div className=" rounded-lg bg-white p-6 shadow-md">
                            <p className="mb-4 text-gray-600">
                                “Grazie a IncluDO ho trovato una comunità che mi
                                sostiene in ogni passo.”
                            </p>
                            <h4 className="text-lg font-semibold">
                                Luca Bianchi
                            </h4>
                        </div>
                        <div className=" rounded-lg bg-white p-6 shadow-md">
                            <p className="mb-4 text-gray-600">
                                “I corsi di artigianato sono stati un’esperienza
                                straordinaria e unica.”
                            </p>
                            <h4 className="text-lg font-semibold">
                                Giulia Verdi
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-primary-500 py-12 text-white">
                &copy;includo 2024
            </footer>
        </div>
    );
}
