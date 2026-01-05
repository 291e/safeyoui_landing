"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function DataDeletionPage() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    // 실제 API 연동 전: 안내 시나리오용 처리
    setSubmitted(true);
    setConfirmOpen(false);
  };

  return (
    <>
      <main className="min-h-[70vh] bg-white">
        <section className="max-w-3xl mx-auto px-4 py-12">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              데이터 삭제 안내 및 요청
            </h1>
            <p className="mt-2 text-gray-600">
              Google Play 스토어 등록정보 표시에 따른 데이터 삭제 안내
              페이지입니다.
            </p>
          </header>

          <div className="space-y-8">
            <section
              aria-labelledby="app-info"
              className="border rounded-xl p-6"
            >
              <h2 id="app-info" className="text-xl font-semibold text-gray-900">
                앱 및 개발자 정보
              </h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">앱 이름</span>: 안전해YOU
                </li>
                <li>
                  <span className="font-medium">개발자</span>: Lydianlabs
                </li>
              </ul>
            </section>

            <section
              aria-labelledby="deletion-steps"
              className="border rounded-xl p-6"
            >
              <h2
                id="deletion-steps"
                className="text-xl font-semibold text-gray-900"
              >
                데이터 삭제 요청 절차
              </h2>
              <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  본 페이지에서 계정 식별 정보(가입 이메일)를 입력하고 삭제
                  요청을 제출합니다.
                </li>
              </ol>

              <form
                className="mt-6 space-y-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  계정 식별 정보 (가입 이메일)
                </label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-describedby="email-help"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={submitted}
                >
                  {submitted ? "삭제 요청 완료" : "삭제 요청 제출"}
                </button>

                {submitted && (
                  <div
                    role="status"
                    className="mt-4 rounded-md bg-green-50 border border-green-200 p-4 text-green-800"
                  >
                    입력하신 계정(이메일) 기준으로 데이터 삭제가 완료되었습니다.
                  </div>
                )}
              </form>
            </section>

            <section
              aria-labelledby="retention-policy"
              className="border rounded-xl p-6"
            >
              <h2
                id="retention-policy"
                className="text-xl font-semibold text-gray-900"
              >
                삭제/보관 데이터 및 보관 기간
              </h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">삭제되는 데이터</span>: 계정
                  전체
                </li>
                <li>
                  <span className="font-medium">보관되는 데이터</span>: 없음
                </li>
                <li>
                  <span className="font-medium">추가 보관 기간</span>: 없음
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말로 계정을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              이 작업은 되돌릴 수 없습니다. 확인을 누르면 계정 전체 데이터가
              삭제됩니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>
              삭제 확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
